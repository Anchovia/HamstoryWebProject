import LogoNavigation from './LogoNavigation';
import TextNavigation from './TextNavigation';
import IconNavigation from './IconNavigation';

import styles from "./Header.module.css";

export default function Header(){
    return (
        <div className={styles.Header}>
            <LogoNavigation/>
            <TextNavigation/>
            <IconNavigation/>
        </div>
    );
}