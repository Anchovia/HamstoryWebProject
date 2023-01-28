import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Member from "./Member";
import SignUp from "./SignUp";

export default function Login(){
    const [isLogin , setIsLogin] = useState(true);

    function memberClick(event){
        event.preventDefault();
        if(isLogin === false){
            setIsLogin(true);
        }
    }

    function signUpClick(event){
        event.preventDefault();
        if(isLogin === true){
            setIsLogin(false);
        }
    }

    useEffect(()=>{
        window.scrollTo({
            top:0
        })
    }, []);

    return (
        <div className={styles.login}>
            <div className={styles.title}>HAMSTORY</div>
            <div className={styles.button}>
                <button onClick={memberClick} style={isLogin ? {
                    backgroundColor: "#FBDEA2"
                } : {
                    backgroundColor : "#FFFFFF"
                }}>회원</button>
                <button onClick={signUpClick} style={isLogin ? {
                    backgroundColor : "#FFFFFF"
                } : {
                    backgroundColor : "#FBDEA2"
                }}>비회원</button>
            </div>
            {isLogin === true ? <Member/> : <SignUp/>}
        </div>
    );
}