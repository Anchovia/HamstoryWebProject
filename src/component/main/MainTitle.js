// 이미지 import
import iconToUnder from '../../images/icon/image_icon_toUnder.png'

// CSS import
import styles from "./MainTitle.module.css";

export default function MainTitle(){
    return (
        <div className={styles.body}>
            <section className={styles.titleSection}>
                <p className={styles.titleText}>햄스터의 모든 것</p>
                <span className={styles.titleTextBold}>HAMSTORY</span>
                <span className={styles.titleText}>에서 만나보세요</span>
            </section>
            <section className={styles.toUnderSection}>
                <p className={styles.toUnderText}>아래로 스크롤 해 자세히 알아보기</p>
                <img src={iconToUnder} alt="iconToUnder"/>
            </section>
        </div>
    );
}