// module import
import { useNavigate } from "react-router";

// css import
import styles from "./MoveLoginButton.module.css";

export default function MoveLoginButton(props){
    // 페이지 이동 함수
    const movePage = useNavigate();

    // 로그인 버튼 클릭 시, 로그인 페이지로 이동하는 함수
    const handleLoginClick = (e) => {
        e.preventDefault();
        movePage("/login");
        props.setInfoFunc(false); // 로그인 페이지로 이동하면, 로그인 디스플레이를 숨김
    }

    return(
        <button className={styles.button} onClick={handleLoginClick}>로그인</button>
    );
}