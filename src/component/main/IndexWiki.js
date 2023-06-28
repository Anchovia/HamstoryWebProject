// component import
import MoveWiki from '../button/MoveWiki';

// image import
import pictureWiki from '../../images/picture/image_picture_wiki.png'
import iconWiki from '../../images/icon/image_icon_index_wiki.png'

// css import
import styles from "./IndexWiki.module.css";

export default function IndexWiki(props){
    return (
        <div className={styles.body}> 
            <section className={styles.textSection}>
                <article className={styles.titleArticle}>
                    <span className={styles.titleText}>위키</span>
                    <img className={styles.titlePicture} src={iconWiki} alt="IconWiki"/>
                </article>
                <article className={styles.mainText}>
                    <p>클릭하는 순간,</p>
                    <p>당신도 햄스터 박사</p>
                </article>
                <article className={styles.subText}>
                    <p>다양한 종류의 햄스터를 알아가보세요.</p>
                </article>
                <nav>
                    <MoveWiki/>
                </nav>
            </section>
            <section className={styles.pictureSection}>
                <img className={styles.mainPicture} src={pictureWiki} alt="PictureWiki"/>
            </section>
        </div>
    );
}