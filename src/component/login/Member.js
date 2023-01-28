import { useNavigate } from "react-router-dom";
import styles from "./Member.module.css";

export default function Member(){
    const movePage = useNavigate();

    function login(event){
        event.preventDefault();
        movePage("/");
    }

    return (
        <form className={styles.body}>
            <div className={styles.inputArea}>
                <div>
                    <input type="text" placeholder="아이디"/>
                </div>
                <div>
                    <input type="text" placeholder="비밀번호" className={styles.inputPassWord}/>
                </div>
            </div>
            <button className={styles.button} onClick={login}>로그인</button>
        </form>
    );
}