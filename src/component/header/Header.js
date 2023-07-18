// component import
import LogoNav from './LogoNav';
import TextNav from './TextNav';
import IconNav from './IconNav';

// css import
import styles from "./Header.module.css";

export default function Header(){
    return (
        <nav className={styles.body}>
            <ul className={styles.header}>
                <li><LogoNav/></li>
                <li><TextNav/></li>
                <li><IconNav/></li>
            </ul>
        </nav>
    );
}