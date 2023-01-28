import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export default function SignUp(){
    const movePage = useNavigate();

    function signUp(event){
        event.preventDefault();
        movePage("/");
    }

    return (
        <form className={styles.body}>
            <div className={styles.inputArea}>
                <div>
                    <input type="text" placeholder="닉네임"/>
                    <div className={styles.errorName}>이미 사용중인 닉네임입니다.</div>
                </div>
                <div>
                    <input type="text" placeholder="아이디" className={styles.inputId}/>
                    <div className={styles.errorId}>이미 사용중인 아이디입니다.</div>
                </div>
                <div>
                    <input type="text" placeholder="비밀번호" className={styles.inputPassword}/>
                    <div className={styles.errorPassword}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                </div>
            </div>
            <button className={styles.button} onClick={signUp}>회원가입</button>
        </form>
    );
}