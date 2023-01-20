import LogoNavigation from './LogoNavigation';
import TextNavigation from './TextNavigation';
import IconNavigation from './IconNavigation';

import styles from "./TopNavigationBar.module.css";

export default function TopNavigationBar(){
    return (
        <div className={styles.topNavigationBar}>
            <div><LogoNavigation/></div>
            <div><TextNavigation/></div>
            <div><IconNavigation/></div>
        </div>
    );
}