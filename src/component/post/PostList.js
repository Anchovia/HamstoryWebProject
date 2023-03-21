import styles from './PostList.module.css';

export default function PostList({ id, title, writer, date, hits, likes }){
    return (
        <div className={styles.gridHelper}>
            <div className={styles.text}>{id}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{writer}</div>
            <div className={styles.text}>{date}</div>
            <div className={styles.text}>{hits}</div>
            <div className={styles.text}>{likes}</div>
        </div>
    );
}