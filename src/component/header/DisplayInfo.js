import styles from "./DisplayInfo.module.css";

export default function Displayinfo(){
    return (
        <div className={styles.display}>
            <div className={styles.element}>
                <div className={styles.text}>HAMSTORY</div>
                <button className={styles.button}>로그인</button>
            </div>
        </div>
    );
}