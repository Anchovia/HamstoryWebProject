/*
    설명:
*/


// 모듈 import
import { useNavigate } from "react-router";

// CSS import
import styles from "./AccessibleWindow.module.css";

export default function AccessibleWindow({setInfoFunc}){
    // 페이지 이동 함수
    const movePage = useNavigate();

    // 로그인 버튼 클릭 시, 로그인 페이지로 이동하는 함수
    const handleLoginClick = (e) => {
        e.preventDefault();
        movePage("/login");
        setInfoFunc(false); // 로그인 페이지로 이동하면, 로그인 디스플레이를 숨김
    }

    return(
        <div className={styles.container}>
            <div className={styles.needToLogin}>로그인이 필요합니다.</div>
            <div className={styles.nonMember}>현재 비회원 상태입니다.</div>
            <button className={styles.button} onClick={handleLoginClick}>로그인</button>
        </div>
    );
}