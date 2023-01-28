import pictureWiki from '../../images/picture/image_picture_wiki.png'
import iconWiki from '../../images/icon/image_icon_index_wiki.png'

import styles from "./IndexWiki.module.css";

export default function IndexWiki({position}){
    return (
        <div className={styles.indexWiki}>
            <span className={position >= 1200 && position <= 2620 ? styles.indexWikiContentsYesAnimation : styles.indexWikiContentsNoAnimation}>
                <div className={styles.indexGenre}>
                    <span className={styles.genreTitle}>위키</span>
                    <img src={iconWiki} alt="IconWiki"/>
                </div>
                <div className={styles.contentsTitle}>
                    <p>클릭하는 순간,</p>
                    <p>당신도 햄스터 박사</p>
                </div>
                <div className={styles.contentsDetails}>
                    <p>다양한 종류의 햄스터를 알아가보세요.</p>
                </div>
                <button className={styles.button}>위키로 이동</button>
            </span>
            <img src={pictureWiki} alt="PictureWiki" className={styles.indexWikiPicture}/>
        </div>
    );
}