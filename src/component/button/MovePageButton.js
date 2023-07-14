// module import
import { useNavigate } from 'react-router-dom';

// css import
import styles from "./MovePageButton.module.css";

export default function MovePageButton(props){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(props.url);
    }

    return(
        <nav>
            <button className={styles.button} onClick={handleClick}>{props.text}</button>
        </nav>
    );
}