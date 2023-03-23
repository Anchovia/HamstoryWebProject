// 이미지 import
import iconPosting from '../../images/icon/image_icon_posting.png'

// CSS import
import styles from "./PostingButton.module.css"

// 모듈 import
import { useNavigate } from 'react-router-dom';

export default function PostingButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/community/posting');
    }
    return (
        <>
            <img src={iconPosting} alt="IconPosting" onClick={handleClick} className={styles.button}/>
        </>
    );
}