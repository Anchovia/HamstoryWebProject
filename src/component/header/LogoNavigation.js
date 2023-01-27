import { Link } from "react-router-dom";

import hamstoryLogo from '../../images/logo/image_logo.png'

import styles from "./LogoNavigation.module.css";

export default function LogoNavigation(){
    return (
        <div>
            <Link to="/" className={styles.logoNavigationLink}>
                <img src={hamstoryLogo} alt="hamstoryLogo" className={styles.hamstoryLogo}/>
                <span className={styles.logoText}>HAMSTORY</span>
            </Link>
        </div>
    );
}