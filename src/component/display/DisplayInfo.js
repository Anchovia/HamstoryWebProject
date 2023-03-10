import styles from "./DisplayInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function DisplayInfo({setInfoFunc}){
    const movePage = useNavigate();

    function loginClick(event){
        event.preventDefault();
        goToLoginPage();
    }

    function goToLoginPage(){
        movePage("/login");
        setInfoFunc(false);
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