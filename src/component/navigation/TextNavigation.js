import styles from "./TextNavigation.module.css";

import { Link } from "react-router-dom";

export default function TextNavigation(){
    return (
        <nav className={styles.textNavigation}>
            <Link to="/hamstory">햄스토리</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/wiki">위키</Link>
            <Link to="/help">도움말</Link>
        </nav>
    );
}