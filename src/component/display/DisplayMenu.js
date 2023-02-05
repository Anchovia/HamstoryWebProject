/*
    설명: 메뉴바를 표시하는 컴포넌트
*/

// CSS import
import styles from "./DisplayMenu.module.css";

export default function DisplayMenu(){
    return(
        <div className={[styles.display, styles.fadeInRight].join(" ")}>
        </div>
    );
}