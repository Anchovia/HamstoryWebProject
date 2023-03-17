/*
    설명: 로고를 누르면 홈으로 이동하는 네비게이션 바
*/

// 모듈 import
import { Link } from "react-router-dom";

// CSS import
import styles from "./LogoNav.module.css";

export default function LogoNav(){
    return (
        <div className={styles.body}>
            <Link to="/" className={styles.link}>
                <div className={styles.logoTxt}>HAMSTORY</div>
            </Link>
        </div>
    );
}