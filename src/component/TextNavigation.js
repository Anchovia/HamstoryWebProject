import styles from "./TextNavigation.module.css";

import { Link } from "react-router-dom";

export default function TextNavigation(){
    return (
        <nav className={styles.textNavigation}>
            <Link to="/main">햄스토리</Link>
            <Link to="/main">커뮤니티</Link>
            <Link to="/main">위키</Link>
            <Link to="/main">도움말</Link>
        </nav>
    );
}