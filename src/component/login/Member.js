/*
    설명: 로그인 페이지 컴포넌트
*/

// 모듈 import
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 훅 import
// import useFetch from "../../hooks/useFetch";
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

    function dataPost(email, pw){
        // 이메일과 pw를 axios를 이용해 url로 전송
        axios.post(url, {
            email: email,
            pw: pw
        })
        .then((res)=>{
            console.log(res);
            // 로그인 성공 시 메인 페이지로 이동
            if(res.data === "success"){
                movePage("/");
                return;
            }
            // 로그인 실패 시 에러 메시지 표시
            setError(true);
        })
    }

    // 로그인 버튼 클릭 시 실행되는 함수
    function login(e){
        e.preventDefault();
        dataPost(email, pw); // 데이터 전송
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