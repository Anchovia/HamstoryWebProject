import hamstoryLogo from '../images/image_logo.png'

import styles from "./LogoNavigation.module.css";

import { Link } from "react-router-dom";

export default function LogoNavigation(){
    return (
        <div>
            <Link to="/main" className={styles.logoNavigationLink}>
                <img src={hamstoryLogo} alt="hamstoryLogo" className={styles.hamstoryLogo}/>
                <span className={styles.logoText}>HAMSTORY</span>
            </Link>
        </div>
    );
}