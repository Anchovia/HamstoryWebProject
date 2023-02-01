import LogoNav from './LogoNav';
import TextNav from './TextNav';
import IconNav from './IconNav';

import styles from "./Header.module.css";

export default function Header(){
    return (
        <div className={styles.header}>
            <LogoNav/>
            <TextNav/>
            <IconNav/>
        </div>
    );
}