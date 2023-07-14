// 모듈 import
import { useState } from "react";

// 컴포넌트 import
import Member from "./Member";
import SignUp from "./SignUp";
import Footer from "../footer/Footer";

// 훅 import
import useScrollTop from "../../hooks/useScrollTop";

// CSS import
import styles from "./Login.module.css";

export default function Login(){
    // 로그인 여부를 저장할 state
    const [isLogin , setIsLogin] = useState(true);
    // 회원가입 성공 여부를 저장할 state
    const [signUpSuccess, setSignUpSuccess] = useState(false);

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

    useScrollTop(); // 스크롤을 최상단으로 이동

    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <p className={styles.title}>HAMSTORY</p>
            </header>
            <main className={styles.main}>
                <section className={styles.loginSection}>
                    <div className={styles.selector}>
                        <button onClick={memberClick} style={isLogin | signUpSuccess ? {
                            backgroundColor: "#72B2C6",
                            color: "white"
                        } : {
                            backgroundColor : "#FFFFFF",
                            color: "black"
                        }} className={styles.button}>회원</button>
                        <button onClick={signUpClick} style={isLogin | signUpSuccess ? {
                            backgroundColor : "#FFFFFF",
                            color: "black"
                        } : {
                            backgroundColor : "#72B2C6",
                            color: "white"
                        }} className={styles.button}>비회원</button>
                    </div>
                    <div className={styles.form}>
                        {isLogin === true | signUpSuccess ? <Member/> : <SignUp setSignUpSuccess = {setSignUpSuccess}/>}
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
}