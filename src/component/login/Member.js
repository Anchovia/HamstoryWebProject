/*
    설명: 로그인 페이지 컴포넌트
*/

// 모듈 import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 훅 import
import useFetch from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";

// CSS import
import styles from "./Member.module.css";

export default function Member(){
    // 데이터를 저장할 url
    const url = "http://localhost:4000/userData";

    // 데이터 배열을 저장할 변수 data
    const data = useFetch(url);

    // 이메일을 저장할 state
    const [email, emailChange] = useInput("");
    const [pw, pwChange] = useInput("");

    // 페이지 이동 함수
    const movePage = useNavigate();

    // 에러 메시지 표시 여부
    const [error, setError] = useState(false);

    // 로그인 버튼 클릭 시 실행되는 함수
    function login(e){
        e.preventDefault();
    
        // 이메일과 비밀번호가 일치하는 데이터를 찾아서 저장
        const getData = data.find(item => item.email === email)

        // 데이터가 없거나 이메일과 비밀번호가 일치하지 않으면 에러 메시지 표시
        // 일치하면 메인 페이지로 이동
        if(getData === undefined){
            setError(true);
            return;
        }
        else if(getData.email === email && getData.pw.toString() === pw){
            movePage("/");
        }
        else{
            setError(true);
        }
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