import styles from "./IndexWiki.module.css";

import pictureWiki from '../images/image_picture_wiki.png'
import iconWiki from '../images/image_icon_index_wiki.png'

export default function IndexWiki(){
    return (
        <div className={styles.indexWiki}>
            <span className={styles.indexWikiContents}>
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
                <button className={styles.button}>자세히 알아보기</button>
            </span>
            <img src={pictureWiki} alt="PictureWiki" className={styles.indexWikiPicture}/>
        </div>
    );
}