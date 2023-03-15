/*
    설명: 로그인 페이지 컴포넌트
*/

// 모듈 import
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 훅 import
import useInput from "../../hooks/useInput";

// CSS import
import styles from "./Member.module.css";

export default function Member(){
    // 데이터를 가져올 url
    const url = "http://localhost:8080/members/login";

    // 이메일을 저장할 state
    const [email, emailChange] = useInput("");
    const [pw, pwChange] = useInput("");

    // 페이지 이동 함수
    const movePage = useNavigate();

    // 에러 메시지 표시 여부
    const [error, setError] = useState(false);

    // dataPost 함수
    let dataPost = async(email, pw) => {
        try{
            // 이메일과 pw를 axios를 이용해 url로 전송 및 jwt 토큰 생성
            const res = await axios.post(url, {
                email: email,
                pw: pw,
            })

            localStorage.setItem("jwt", res.data); // jwt 토큰 로컬 스토리지에 저장

            movePage("/"); // 로그인 성공 시 메인 페이지로 이동

            return true;
        }
        // 로그인 실패시
        catch(err){
            setError(true); // 에러 메시지 표시

            return false;
        }
    }

    // 로그인 버튼 클릭 시 실행되는 함수
    let login = (e) => {
        e.preventDefault();
        dataPost(email, pw);
    }
    
    return (
        <form className={styles.body}>
            <input
                type="text" 
                placeholder="이메일"
                value={email}
                onChange={emailChange}
            />
            <input 
                className={styles.inputMarin} 
                type="text" 
                placeholder="비밀번호"
                value={pw}
                onChange={pwChange}
            />
            <div className={styles.container}>
                {error && (
                <div className={styles.errorText}>아이디 또는 비밀번호가 틀렸습니다.</div>
            )}
            </div>
            <button className={styles.button} onClick={login}>로그인</button>
        </form>
    );
}