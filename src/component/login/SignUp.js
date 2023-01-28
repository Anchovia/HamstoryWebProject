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
                </div>
                <div>
                    <input type="text" placeholder="아이디" className={styles.inputId}/>
                </div>
                <div>
                    <input type="text" placeholder="비밀번호" className={styles.inputPassWord}/>
                </div>
            </div>
            <button className={styles.button} onClick={signUp}>회원가입</button>
        </form>
    );
}