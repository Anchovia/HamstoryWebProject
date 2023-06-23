// 모듈 import
import { Link } from "react-router-dom";

// CSS import
import styles from "./LogoNav.module.css";

export default function LogoNav(){
    return (
        <nav className={styles.body}>
            <div className={styles.container}>
                <Link to="/" className={styles.link}>
                    <h1 className={styles.logo}>HAMSTORY</h1>
                </Link>
            </div>
        </nav>
    );
}