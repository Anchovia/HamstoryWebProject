/*
    설명: 로그인 전에 보여지는 화면
*/

// 모듈 import
import { useNavigate } from "react-router-dom";

// CSS import
import styles from "./DisplayInfo.module.css";

export default function DisplayInfo({setInfoFunc}){
    // 페이지 이동 함수
    const movePage = useNavigate();

    // 로그인 버튼 클릭 시, 로그인 페이지로 이동하는 함수
    function loginClick(event){
        event.preventDefault();
        goToLoginPage();
    }

    // 로그인 페이지로 이동 함수
    function goToLoginPage(){
        movePage("/login");
        setInfoFunc(false); // 로그인 페이지로 이동하면, 로그인 디스플레이를 숨김
    }

    return (
        <div className={styles.display}>
            <div className={styles.container}>
                <div className={styles.title}>HAMSTORY</div>
                <button className={styles.button} onClick={loginClick}>로그인</button>
            </div>
        </div>
    );
}