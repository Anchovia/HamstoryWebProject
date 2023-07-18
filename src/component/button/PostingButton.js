// 모듈 import
import { useNavigate } from 'react-router-dom';

// config import
import { SRC_ICON_POSTING } from "../../config/config";

// CSS import
import styles from "./PostingButton.module.css"

export default function PostingButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/community/posting');
    }
    return (
        <>
            <img src={SRC_ICON_POSTING} alt="IconPosting" onClick={handleClick} className={styles.button}/>
        </>
    );
}