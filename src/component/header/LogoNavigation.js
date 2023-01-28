import { Link } from "react-router-dom";

import styles from "./LogoNavigation.module.css";

export default function LogoNavigation(){
    return (
        <div className={styles.body}>
            <Link to="/" className={styles.link}>
                <div className={styles.text}>HAMSTORY</div>
            </Link>
        </div>
    );
}