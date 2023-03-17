/*
    설명: 메인 페이지의 타이틀을 담당하는 컴포넌트
*/

// 이미지 import
import iconToUnder from '../../images/icon/image_icon_toUnder.png'

// CSS import
import styles from "./MainTitle.module.css";

export default function MainTitle(){
    return (
        <div className={styles.mainTitle}>
            <div className={styles.title}>
                <div className={styles.text}>햄스터의 모든 것</div>
                <span className={styles.emphasis}>HAMSTORY</span>
                <span className={styles.text}>에서 만나보세요</span>
            </div>
            <div className={styles.toUnder}>
                <div className={styles.toUnderText}>아래로 스크롤 해 자세히 알아보기</div>
                <img src={iconToUnder} alt="iconToUnder"/>
            </div>
        </div>
    );
}