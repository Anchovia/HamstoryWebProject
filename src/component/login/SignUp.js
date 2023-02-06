/*
    설명: 회원가입 페이지 컴포넌트
*/

// 모듈 import
import { useState, useEffect } from "react";
import axios from "axios";

// hook import
import useFetch from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";

// CSS import
import styles from "./SignUp.module.css";

export default function SignUp({setSignUpSuccess, url}){
    // 회원가입 폼 데이터를 저장할 state
    const [nickName, nickNameChange] = useInput("");
    const [email, emailChange] = useInput("");
    const [pw, pwChange] = useInput("");

    // 회원가입 폼 데이터 유효성을 저장할 state
    const [nickNameValid, setNickNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    // 회원가입 버튼 활성화 여부를 저장할 state
    const [notAllow, setNotAllow] = useState(true);

    // id를 생성하기 위한 hook
    const id = useFetch(url).length + 1;

    // 회원가입 함수
    function signUp(event){
        event.preventDefault();
        pushData(nickName, email, pw); // 데이터 전송
        setSignUpSuccess(true); // 회원가입 성공 여부를 true로 변경
    }

    // 데이터 전송 함수
    function pushData(nickName, email, pw){
        // 데이터 전송
        axios.post(url, {
            id: id, // id는 데이터의 개수 + 1
            nickName: nickName, // 닉네임
            email: email, // 이메일
            pw: pw // 비밀번호
        })
    }

    // 회원가입 버튼 활성화 여부를 결정하는 useEffect
    useEffect(()=>{
        // 모든 데이터가 유효하면 회원가입 버튼 활성화
        if(nickNameValid && emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [nickNameValid, emailValid, pwValid])

    // 회원가입 폼 데이터 유효성을 결정하는 useEffect
    useEffect(()=>{
        // regex 정규식
        const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const pwRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;

        // 데이터 유효성 검사
        nickName.length > 0 ? setNickNameValid(true) : setNickNameValid(false);
        emailRegex.test(email) ? setEmailValid(true) : setEmailValid(false);
        pwRegex.test(pw) ? setPwValid(true) : setPwValid(false);
    }, [nickName, email, pw])

    return (
        <form className={styles.body}>
            <div className={styles.profile}/>
            <input
                type="text"
                placeholder="닉네임"
                value={nickName}
                onChange={nickNameChange}
            />
            <input
                className={styles.inputMarin}
                type="text"
                placeholder="이메일"
                value={email}
                onChange={emailChange}
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
                onChange={pwChange}
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