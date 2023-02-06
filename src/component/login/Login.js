/*
    설명: 로그인 및 회원가입 페이지
*/  

// 모듈 import
import { useState, useEffect } from "react";

// 컴포넌트 import
import Member from "./Member";
import SignUp from "./SignUp";

// CSS import
import styles from "./Login.module.css";

export default function Login(){
    // 로그인 여부를 저장할 state
    const [isLogin , setIsLogin] = useState(true);
    // 회원가입 성공 여부를 저장할 state
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const url = "http://localhost:4000/userData";

    // 회원 버튼 클릭 이벤트
    function memberClick(event){
        event.preventDefault();
        if(isLogin === false){
            setIsLogin(true);
        }
    }

    // 비회원 버튼 클릭 이벤트
    function signUpClick(event){
        event.preventDefault();
        setSignUpSuccess(false);
        if(isLogin === true){
            setIsLogin(false);
        }
    }

    // 로그인 페이지가 로드될 때 스크롤을 맨 위로 이동(1회만 실행)
    useEffect(()=>{
        window.scrollTo({
            top:0
        })
    }, []);

    return (
        <div className={styles.login}>
            <div className={styles.title}>HAMSTORY</div>
            <div className={styles.selector}>
                <button onClick={memberClick} style={isLogin | signUpSuccess ? {
                    backgroundColor: "#FFDAB9"
                } : {
                    backgroundColor : "#FFFFFF"
                }} className={styles.button}>회원</button>
                <button onClick={signUpClick} style={isLogin | signUpSuccess ? {
                    backgroundColor : "#FFFFFF"
                } : {
                    backgroundColor : "#FFDAB9"
                }} className={styles.button}>비회원</button>
            </div>
            <div className={styles.form}>
                {isLogin === true | signUpSuccess ? <Member url={url}/> : <SignUp setSignUpSuccess = {setSignUpSuccess} url = {url}/>}
            </div>
        </div>
    );
}