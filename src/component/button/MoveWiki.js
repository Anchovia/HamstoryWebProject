// module import
import { useNavigate } from 'react-router-dom';

// css import
import styles from "./MoveWiki.module.css";

export default function MoveWiki(){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/wiki");
    }

    return(
        <div>
            <button className={styles.button} onClick={handleClick}>위키로 이동</button>
        </div>
    );
}