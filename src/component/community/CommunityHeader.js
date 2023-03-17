import styles from "./CommunityHeader.module.css";

export default function CommunityHeader(){
    return(
        <div className={styles.body}>
            <div className={styles.container}>공지사항</div>
            <div className={styles.container}>베스트 글</div>
            <div className={styles.container}>최신 글</div>
            <div className={styles.container}>자유게시판</div>
            <div className={styles.container}>햄스토리 앨범</div>
        </div>
    );
}