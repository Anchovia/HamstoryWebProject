import styles from "./TextNavigation.module.css";

export default function TextNavigation(){
    return (
        <nav className={styles.textNavigation}>
            <a href="/">햄스토리</a>
            <a href="/">커뮤니티</a>
            <a href="/">위키</a>
            <a href="/">도움말</a>
        </nav>
    );
}