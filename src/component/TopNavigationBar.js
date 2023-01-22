import LogoNavigation from './LogoNavigation';
import TextNavigation from './TextNavigation';
import IconNavigation from './IconNavigation';

import styles from "./TopNavigationBar.module.css";

export default function TopNavigationBar(){
    return (
        <div className={styles.topNavigationBar}>
            <LogoNavigation/>
            <TextNavigation/>
            <IconNavigation/>
        </div>
    );
}