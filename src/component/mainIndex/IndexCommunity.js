import styles from "./IndexCommunity.module.css";

import pictureCommunity from '../../images/picture/image_picture_community.png'
import iconCommunity from '../../images/icon/image_icon_index_community.png'

export default function IndexCommunity({position}){
    return (
        <div className={styles.indexCommunity}>
            <img src={pictureCommunity} alt="PictureCommunity" className={styles.indexCommunityPicture}/>
            <div className={position >= 200 && position <= 1515 ? styles.indexCommunityContentsYesAnimation : styles.indexCommunityContentsNoAnimation}>
                <div className={styles.indexGenre}>
                    <img src={iconCommunity} alt="IconCommunity"/>
                    <span className={styles.genreTitle}>커뮤니티</span>
                </div>
                <div className={styles.contentsTitle}>
                    <p>햄스터들의 다채로운 일상들을</p>
                    <p>커뮤니티에서 만나보세요</p>
                </div>
                <div className={styles.contentsDetails}>
                    <p>홈페이지 이용자분들이 공유해주신</p>
                    <p>사랑스러운 가족분들을 만나보실 수 있어요.</p>
                </div>
                <button className={styles.button}>자세히 알아보기</button>
            </div>
        </div>
    );
}