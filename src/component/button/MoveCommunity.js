// module import
import { useNavigate } from 'react-router-dom';

// css import
import styles from "./MoveCommunity.module.css";

export default function MoveCommunity(){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/community");
    }

    return(
        <nav>
            <button className={styles.button} onClick={handleClick}>커뮤니티로 이동</button>
        </nav>
    );
}