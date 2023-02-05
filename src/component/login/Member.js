// 모듈 import
import { useNavigate } from "react-router-dom";

// CSS import
import styles from "./Member.module.css";

export default function Member(){
    // 페이지 이동 함수
    const movePage = useNavigate();

    // 로그인 버튼 클릭 시, 메인 페이지로 이동
    function login(event){
        event.preventDefault();
        movePage("/");
    }

    return (
        <form className={styles.body}>
            <input type="text" placeholder="아이디"/>
            <input className={styles.inputMarin} type="text" placeholder="비밀번호"/>
            <button className={styles.button} onClick={login}>로그인</button>
        </form>
    );
}