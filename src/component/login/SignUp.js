import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export default function SignUp(){
    const [nickname, setNickname] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [nicknameValid, setnicknameValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    const movePage = useNavigate();

    function signUp(event){
        console.log("닉네임 : " + nickname + " 아이디 : " + id + " 비밀번호 : " + password);
        event.preventDefault();
        movePage("/");
    }

    function handleEmail(event){
        setNickname(event.target.value);
        nickname.length > 0 ? setnicknameValid(true) : setnicknameValid(false);
    }

    function handleId(event){
        setId(event.target.value);
        id.length > 0 ? setIdValid(true) : setIdValid(false);
    }

    function handlePassword(event){
        setPassword(event.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        regex.test(password) ? setPasswordValid(true) : setPasswordValid(false);
    }

    

    useEffect(()=>{
        if(nicknameValid && idValid && passwordValid){
            setNotAllow(false);
            return;
        }
    }, [nicknameValid, idValid, passwordValid])

    return (
        <form className={styles.body}>
            <div className={styles.inputArea}>
                <div>
                    <input
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={handleEmail}
                    />
                    <div className={styles.errorName}>
                        {!nicknameValid && nickname.length > 0 && (
                            <div>이미 사용중인 닉네임입니다.</div>
                        )}
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="아이디"
                        className={styles.inputId}
                        value={id}
                        onChange={handleId}
                    />
                    <div className={styles.errorId}>
                        {!idValid && id.length > 0 && (
                            <div>이미 사용중인 아이디입니다.</div>
                        )}
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="비밀번호"
                        className={styles.inputPassword}
                        value={password}
                        onChange={handlePassword}
                    />
                    <div className={styles.errorPassword}>
                        {!passwordValid && password.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>
                </div>
            </div>
            <button disabled={notAllow} className={styles.button} onClick={signUp}>회원가입</button>
        </form>
    );
}