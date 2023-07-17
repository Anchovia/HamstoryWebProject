// image import
import pictureWiki from '../../images/picture/image_picture_wiki.png'

// css import
import styles from "./IndexWiki.module.css";
import MovePageButton from '../button/MovePageButton';

export default function IndexWiki(props){
    return (
        <div className={styles.body}> 
            <section className={styles.textSection}>
                <article className={styles.titleArticle}>
                    <h3 className={styles.titleText}>위키</h3>
                </article>
                <article>
                    <h1>클릭하는 순간,</h1>
                    <h1>당신도 햄스터 박사</h1>
                </article>
                <article className={styles.subText}>
                    <p>다양한 종류의 햄스터를 알아가보세요.</p>
                </article>
                <nav>
                    <MovePageButton url={"/wiki"} text={"위키로 이동"}/>
                </nav>
            </section>
            <section className={styles.pictureSection}>
                <img className={styles.mainPicture} src={pictureWiki} alt="PictureWiki"/>
            </section>
        </div>
    );
}