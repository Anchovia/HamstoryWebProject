// image import
import pictureCommunity from '../../images/picture/image_picture_community.png'

// css import
import styles from "./IndexCommunity.module.css";
import MovePageButton from '../button/MovePageButton';

export default function IndexCommunity(props){
    return (
        <div className={styles.body}>
            <section className={styles.pictureSection}>
                <img className={styles.mainPicture} src={pictureCommunity} alt="PictureCommunity"/>
            </section>
            <section className={styles.textSection}>
                <article className={styles.titleArticle}>
                    <span className={styles.titleText}>커뮤니티</span>
                </article>
                <article className={styles.mainText}>
                    <p>햄스터들의 다채로운 일상들을</p>
                    <p>커뮤니티에서 만나보세요</p>
                </article>
                <article className={styles.subText}>
                    <p>홈페이지 이용자분들이 공유해주신</p>
                    <p>사랑스러운 가족분들을 만나보실 수 있어요.</p>
                </article>
                <nav>
                    <MovePageButton url={"/community"} text={"커뮤니티로 이동"}/>
                </nav>
            </section>
        </div>
    );
}