// 모듈 import
import { Link } from "react-router-dom";

// CSS import
import styles from "./LogoNav.module.css";

export default function LogoNav(){
    return (
        <nav className={styles.body}>
            <Link to="/" className={styles.link}>
                <h1 className={styles.logoTxt}>HAMSTORY</h1>
            </Link>
        </nav>
    );
}