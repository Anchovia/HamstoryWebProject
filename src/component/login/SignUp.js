/*
    설명: 회원가입 페이지 컴포넌트
*/

// 모듈 import
import { useState, useEffect } from "react";

// hook import
import useFetch from "../../hooks/useFetch";

// CSS import
import styles from "./SignUp.module.css";

export default function SignUp(props){
    // 데이터를 저장할 url
    const url = "http://localhost:4000/userData";

    // 회원가입 폼 데이터를 저장할 state
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    // 회원가입 폼 데이터 유효성을 저장할 state
    const [nickNameValid, setNickNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    // 회원가입 버튼 활성화 여부를 저장할 state
    const [notAllow, setNotAllow] = useState(true);

    // id를 생성하기 위한 hook
    const id = useFetch(url).length + 1;

    // regex 정규식
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const pwRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;

    // 회원가입 함수
    function signUp(event){
        event.preventDefault();
        pushData(nickName, email, pw); // 데이터 전송
        props.setSignUpSuccess(true); // 회원가입 성공 여부를 true로 변경
    }

    // 데이터 전송 함수
    function pushData(nickName, email, pw){
        // 닉네임이 비어있을 경우 닉네임을 "익명"으로 설정
        if(nickName === ""){
            nickName = "익명";
        }

        // 데이터 전송
        fetch(url, {
            method: "POST", // POST 방식으로 전송
            headers: { // 헤더 설정
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ // 데이터를 JSON 형식으로 변환
                id: id, // id는 데이터의 개수 + 1
                nickName: nickName, // 닉네임 
                email: email, // 이메일
                pw: pw // 비밀번호
            })
        })
        .then((res)=>res.json()) // 응답을 JSON 형식으로 변환
    }

    // 닉네임 체크 함수
    function handleNickName(e){
        setNickName(e.target.value);
        nickName.length > 0 ? setNickNameValid(true) : setNickNameValid(false);
    }

    // 이메일 체크 함수
    function handleEmail(e){
        setEmail(e.target.value);
        emailRegex.test(email) ? setEmailValid(true) : setEmailValid(false);
    }

    // 비밀번호 체크 함수
    function handlePw(e){
        setPw(e.target.value);
        pwRegex.test(pw) ? setPwValid(true) : setPwValid(false);
    }

    // 회원가입 버튼 활성화 여부를 결정하는 함수
    useEffect(()=>{
        // 모든 데이터가 유효하면 회원가입 버튼 활성화
        if(nickNameValid && emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [nickNameValid, emailValid, pwValid])

    return (
        <form className={styles.body}>
            <div className={styles.profile}/>
            <input
                type="text"
                placeholder="닉네임"
                value={nickName}
                onChange={handleNickName}
            />
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