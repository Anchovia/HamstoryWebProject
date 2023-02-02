import { useState, useEffect } from "react";
import styles from "./SignUp.module.css";

import dummy from "../../db/data.json";

export default function SignUp(props){
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const [nickNameValid, setNickNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    function signUp(event){
        event.preventDefault();
        pushData(nickName, email, pw);
        props.setSignUpSuccess(true);
    }

    function pushData(nickName, email, pw){
        dummy.userData.push({
            id: dummy.userData.length + 1,
            nickName: nickName,
            email: email,
            pw: pw
        });
    }

    // 닉네임 체크 함수
    function handleNickName(e){
        setNickName(e.target.value);
        nickName.length > 0 ? setNickNameValid(true) : setNickNameValid(false);
    }

    // 이메일 체크 함수
    function handleEmail(e){
        setEmail(e.target.value);
        const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        regex.test(email) ? setEmailValid(true) : setEmailValid(false);
    }

    // 비밀번호 체크 함수
    function handlePw(e){
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;
        regex.test(pw) ? setPwValid(true) : setPwValid(false);
    }

    useEffect(()=>{
        if(nickNameValid && emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        else{
            setNotAllow(true);
        }
    }, [nickName, email, pw, nickNameValid, emailValid, pwValid])

    return (
        <form className={styles.body}>
            <div className={styles.profile}>
                
            </div>
            <input
                type="text"
                placeholder="닉네임"
                value={nickName}
                onChange={handleNickName}
            />
            <div className={styles.container}>
                {!nickNameValid && nickName.length > 0 && (
                    <div className={styles.errorText}>이미 사용중인 닉네임입니다.</div>
                )}
            </div>
            <input
                className={styles.inputMarin}
                type="text"
                placeholder="이메일"
                value={email}
                onChange={handleEmail}
            />
            <div className={styles.container}>
                {!emailValid && email.length > 0 && (
                    <div className={styles.errorText}>올바른 이메일을 입력해주시길 바랍니다.</div>
                )}
            </div>
            <input
                className={styles.inputMarin}
                type="text"
                placeholder="비밀번호"
                value={pw}
                onChange={handlePw}
            />
            <div className={styles.container}>
                {!pwValid && pw.length > 0 && (
                <div className={styles.errorText}>영문, 숫자 포함 6자 이상 20자 이하로 입력해주세요.</div>
            )}
            </div>
            <button disabled={notAllow} className={styles.button} onClick={signUp}>회원가입</button>
        </form>
    );
}