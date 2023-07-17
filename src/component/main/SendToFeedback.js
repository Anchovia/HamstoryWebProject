import MovePageButton from "../button/MovePageButton";

// CSS import
import styles from "./SendToFeedback.module.css";

export default function SendToFeedback(props){
    return (
        <article className={styles.body}>
            <div/>
            <div className={styles.gridContainer}>
                <div/>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainText}>홈페이지는 계속 성장중</h1>
                    <p className={styles.subText}>여러분들의 소중한 의견을 항상 환영합니다.</p>
                    <nav>
                        <MovePageButton url={"/feedback"} text={"피드백 보내기"}/>
                    </nav>
                </div>
                <div/>
            </div>
            <div/>
        </article>
    );
}