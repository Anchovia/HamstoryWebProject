// module import
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

// hook import
import useInput from "../../hooks/useInput";

// config import
import { URL_LOGIN } from "../../config/config";

// css import
import styles from "./Member.module.css";
import LoginButton from "../button/LoginButton";

export default function Member(){
    // state 관리 부분
    const [email, emailChange] = useInput(""); // 이메일을 저장할 state
    const [pw, pwChange] = useInput(""); // pw를 저장할 state
    const [error, setError] = useState(false); // 에러 메시지 표시 여부

    // 변수 저장 부분
    const url :string = URL_LOGIN;
    const loginErrStr :string = "아이디 또는 비밀번호가 틀렸습니다."
    
    // 만료일자 설정
    const minuteExpries :number = 30; // 입력부
    const expiresTime :number = minuteExpries / 60 / 24; // 계산식

    // 페이지 이동 함수
    const movePage = useNavigate();

    // dataPost 함수
    let dataPost = async(email :string, pw :string) => {
        try{
            // 이메일과 pw를 axios를 이용해 url로 전송 및 jwt 토큰 생성
            const res = await axios.post(url, {
                email,
                pw,
            })

            // 에러 판단
            if(res.status === 200 && res.data.length === 0){
                throw new Error("members/login에 axios.post에서 빈 데이터를 전달받았습니다.");
            }

            Cookie.set("jwt", res.data, { expires: expiresTime, secure: true }); // jwt 토큰을 쿠키에 저장

            return true;
        }
        // 로그인 실패시
        catch(err){
            console.log(err); // 에러문 콘솔에 출력

            return false;
        }
    }

    // 로그인 버튼 클릭 시 실행되는 함수
    let login = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dataPost(email, pw)
        .then((res) => {
            if(res === true){
                movePage("/"); // 메인 페이지로 이동
            }
            else{
                setError(true); // 에러 메시지 표시
            }
        });
    }
    
    return (
        <div className={styles.body}>
            <form className={styles.form}>
                <input
                    className={styles.placeholder}
                    type="text" 
                    placeholder="이메일"
                    value={email}
                    onChange={emailChange}
                />

                <input
                    className={styles.placeholder}
                    type="text" 
                    placeholder="비밀번호"
                    value={pw}
                    onChange={pwChange}
                />
            </form>
            <section className={styles.errSection}>
                {error && (
                <div className={styles.errorText}>{loginErrStr}</div>
            )}
            </section>
            <LoginButton loginFunc = {login}/>
        </div>
    );
}