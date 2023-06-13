// Module import
import { useNavigate } from 'react-router-dom';

// CSS import
import styles from './BackButton.module.css';

// Image import
import iconBack from '../../images/icon/image_icon_back.png';

export default function BackButton(){
    // 뒤로가기 함수
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    return(
        <div className={styles.container}>
            <div onClick={handleBackClick} className={styles.element}>
                <img alt="back icon" src={iconBack} className={styles.img}/>
                <span className={styles.text}>뒤로가기</span>
            </div>
        </div>
    );
}