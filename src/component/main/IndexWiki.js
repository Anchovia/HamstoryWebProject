// component import
import MoveWiki from '../button/MoveWiki';

// image import
import pictureWiki from '../../images/picture/image_picture_wiki.png'
import iconWiki from '../../images/icon/image_icon_index_wiki.png'

// css import
import styles from "./IndexWiki.module.css";

export default function IndexWiki({isVisible}){
    return (
        <div className={styles.body}>
            <section className={isVisible ? styles.indexWikiContentsYesAnimation : styles.indexWikiContentsNoAnimation}>
                <article className={styles.indexGenre}>
                    <span className={styles.genreTitle}>위키</span>
                    <img src={iconWiki} alt="IconWiki"/>
                </article>
                <article className={styles.contentsTitle}>
                    <p>클릭하는 순간,</p>
                    <p>당신도 햄스터 박사</p>
                </article>
                <article className={styles.contentsDetails}>
                    <p>다양한 종류의 햄스터를 알아가보세요.</p>
                </article>
                <nav>
                    <MoveWiki/>
                </nav>
            </section>
            <section>
                <img src={pictureWiki} alt="PictureWiki" className={styles.indexWikiPicture}/>
            </section>
        </div>
    );
}