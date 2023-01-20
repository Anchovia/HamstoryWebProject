import hamstoryLogo from '../images/image_logo.png'

import styles from "./LogoNavigation.module.css";

export default function LogoNavigation(){
    return (
        <div>
            <a href="/" className={styles.logoNavigationLink}>
                <img src={hamstoryLogo} alt="hamstoryLogo" className={styles.hamstoryLogo}/>
                <span className={styles.logoText}>HAMSTORY</span>
            </a>
        </div>
    );
}