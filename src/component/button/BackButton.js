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
        <div className={styles.body} onClick={handleBackClick}>
            <img alt="iconBack" src={SRC_ICON_BACK} className={styles.img}/>
            <h4>뒤로가기</h4>
        </div>
    );
}