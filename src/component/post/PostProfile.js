// CSS import
import styles from './PostProfile.module.css';

export default function PostProfile(props){
    return(
        <div className={styles.body}>
            <section className={styles.profilePicture}/>
            <section className={styles.contents}>
                <div className={styles.writer}>{props.writer}</div>
                <div className={styles.gridHelper}>
                    <time className={styles.createdTime}>{props.createdTime}</time>
                    <div className={styles.hits}>조회 {props.hits}</div>
                </div>
            </section>
        </div>
    );
}