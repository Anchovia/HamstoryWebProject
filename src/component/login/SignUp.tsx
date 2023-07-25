// module import
import { useState, useEffect } from "react";
import axios from "axios";
import validator from "validator";

// hook import
import useInput from "../../hooks/useInput";

// config import
import { URL_SIGNUP } from "../../config/config";

// css import
import styles from "./SignUp.module.css";

interface signUpProps{
    setBtnJudg: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp(props : signUpProps){
    // 데이터를 전송할 url
    const emailErrStr :string = "올바른 이메일을 입력해주시길 바랍니다."
    const pwErrStr :string = "영문, 숫자 포함 6자 이상 입력해주세요."
    const url :string = URL_SIGNUP;

    // 회원가입 폼 데이터를 저장할 state
    const [nickName, nickNameChange] = useInput("");
    const [email, emailChange] = useInput("");
    const [pw, pwChange] = useInput("");

    // 회원가입 폼 데이터 유효성을 저장할 state
    const [nickNameValid, setNickNameValid] = useState<boolean>(false);
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [pwValid, setPwValid] = useState<boolean>(false);

    // 회원가입 버튼 활성화 여부를 저장할 state
    const [notAllow, setNotAllow] = useState<boolean>(true);

    // 회원가입 함수
    let signUp = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        pushData(nickName, email, pw); // 데이터 전송
        props.setBtnJudg(true); // 회원가입 성공 여부를 true로 변경
    }

    let pushData = async(nickName :string, email :string, pw :string) => {
        try{
            // 데이터 전송
            const res = await axios.post(url, {
                nickName: nickName, // 닉네임
                email: email, // 이메일
                pw: pw, // 비밀번호
            })

            console.log(res)

            return true;
        }
        // 오류 처리
        catch(err){
            console.log(err) // 오류 출력

            return false;
        }
    };

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
        // validator 라이브러리를 사용하여 데이터 유효성 검사를 수행
        nickName.length > 0 ? setNickNameValid(true) : setNickNameValid(false);
        validator.isEmail(email) ? setEmailValid(true) : setEmailValid(false);
        validator.isStrongPassword(pw, { minLength: 6, minLowercase: 1, minUppercase: 0, minSymbols: 0, minNumbers: 1 }) ? setPwValid(true) : setPwValid(false);
    }, [nickName, email, pw])

    return (
        <div className={styles.body}>
            <section className={styles.sectionProfile}/>
            <form className={styles.formBody}>
                <input
                className={styles.placeholder}
                    type="text"
                    placeholder="닉네임"
                    value={nickName}
                    onChange={nickNameChange}
                />
                <input
                    className={styles.placeholder}
                    type="text"
                    placeholder="이메일"
                    value={email}
                    onChange={emailChange}
                />
            </form>
            <article className={styles.errArticleMiddle}>
                {!emailValid && email.length > 0 && (
                    <div className={styles.errorText}>{emailErrStr}</div>
                )}
            </article>
            <form>
                <input
                    className={styles.placeholder}
                    type="text"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={pwChange}
                />
            </form>
            <article className={styles.errArticleLast}>
                {!pwValid && pw.length > 0 && (
                <div className={styles.errorText}>{pwErrStr}</div>
            )}
            </article>
            <button disabled={notAllow} className={styles.button} onClick={signUp}>회원가입</button>
        </div>
    );
}