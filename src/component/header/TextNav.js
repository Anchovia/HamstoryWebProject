/*
    설명: 텍스트 네비게이션 컴포넌트
*/

// CSS import
import { Link } from "react-router-dom";
import styles from "./TextNav.module.css";

export default function TextNav(){
    return (
        <nav className={styles.textNav}>
            <div className={styles.container}>
                <div className={styles.title}>햄스토리</div>
            </div>
            <Link to="/community" className={styles.link}>
                <div className={styles.container}>
                    <div className={styles.title}>커뮤니티</div>
                </div>
            </Link>
            <div className={styles.container}>
                <div className={styles.title}>위키</div>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>도움말</div>
            </div>
        </nav>
    );
}