// module import
import { useNavigate } from 'react-router-dom';

// config import
import { SRC_ICON_BACK } from '../../config/config';

// css import
import styles from './BackButton.module.css';

export default function BackButton(){
    // 뒤로가기 함수
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    return( 
        <div className={styles.container}>
            <div onClick={handleBackClick} className={styles.element}>
                <img alt="iconBack" src={SRC_ICON_BACK} className={styles.img}/>
                <span className={styles.text}>뒤로가기</span>
            </div>
        </div>
    );
}