// config import
import { SRC_ICON_LIKE } from '../../config/config';

// css import
import styles from './LikeCounter.module.css';

export default function LikeCounter(props){
    return(
        <div className={styles.body}>
          <img alt="iconLike" src={SRC_ICON_LIKE} className={styles.img}/>
          <span className={styles.text}>좋아요 {props.likes}</span>
        </div>
    );
}