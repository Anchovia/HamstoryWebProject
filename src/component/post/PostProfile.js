// CSS import
import styles from './PostProfile.module.css';

export default function PostProfile(props){
    return(
        <div className={styles.body}>
            <div className={styles.profile}/>
                <div className={styles.container}>
                    <div className={styles.writer}>{props.writer}</div>
                    <div className={styles.gridHelper}>
                        <div className={styles.createdTime}>{props.createdTime}</div>
                        <div className={styles.hits}>조회 {props.hits}</div>
                    <div/>
                </div>
            </div>
        </div>
    );
}