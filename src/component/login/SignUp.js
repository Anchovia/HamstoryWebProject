import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export default function SignUp(){
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    const movePage = useNavigate();
        function signUp(event){
            event.preventDefault();
            movePage("/");
        }

    function handleEmail(e){
        setEmail(e.target.value);
        email.length > 0 ? setEmailValid(true) : setEmailValid(false);
    }

    function handleId(event){
        setId(event.target.value);
        id.length > 0 ? setIdValid(true) : setIdValid(false);
    }

    function handlePw(event){
        setPw(event.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        regex.test(pw) ? setPwValid(true) : setPwValid(false);
    }

    useEffect(()=>{
        if(emailValid && idValid && pwValid){
            setNotAllow(false);
            return;
        }
        else{
            setNotAllow(true);
        }
    }, [email, id, pw, emailValid, idValid, pwValid])

    return (
        <form className={styles.body}>
            <input
                type="text"
                placeholder="닉네임"
                value={email}
                onChange={handleEmail}
            />
            <div className={styles.container}>
                {!emailValid && email.length > 0 && (
                    <div className={styles.errorText}>이미 사용중인 닉네임입니다.</div>
                )}
            </div>
            <input
                className={styles.inputMarin}
                type="text"
                placeholder="이메일"
                value={id}
                onChange={handleId}
            />
            <div className={styles.container}>
                {!idValid && id.length > 0 && (
                    <div className={styles.errorText}>이미 사용중인 이메일입니다.</div>
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
                <div className={styles.errorText}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
            </div>
            <button disabled={notAllow} className={styles.button} onClick={signUp}>회원가입</button>
        </form>
    );
}