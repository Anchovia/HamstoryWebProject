import styles from './LikeCounter.module.css';

import iconLikes from '../../images/icon/image_icon_likes.png';

export default function LikeCounter(props){
    return(
        <div className={styles.body}>
          <img alt="Like icon" src={iconLikes} className={styles.img}/>
          <span className={styles.text}>좋아요 {props.likes}</span>
        </div>
    );
}