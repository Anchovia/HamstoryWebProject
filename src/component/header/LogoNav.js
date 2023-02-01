import { Link } from "react-router-dom";

import styles from "./LogoNav.module.css";

export default function LogoNav(){
    return (
        <>
            <Link to="/" className={styles.link}>
                <div className={styles.logo}>HAMSTORY</div>
            </Link>
        </>
    );
}