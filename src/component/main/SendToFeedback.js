import styles from "./SendToFeedback.module.css";

export default function SendToFeedback({position}){
    return (
        <div className={styles.sendToFeedback} style={{
            width: 1280 + (position - 2160) * 1.65
        }}>
            <div className={styles.title}>홈페이지는 계속 성장중</div>
            <div className={styles.contents}>여러분들의 소중한 조언을 항상 환영합니다.</div>
            <button className={styles.button}>피드백 보내기</button>
        </div>
    );
}