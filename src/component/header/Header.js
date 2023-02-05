/*
    설명: 헤더 컴포넌트
*/

// 컴포넌트 import
import LogoNav from './LogoNav';
import TextNav from './TextNav';
import IconNav from './IconNav';

// CSS import
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