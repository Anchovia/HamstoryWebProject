// 모듈 import
import { Link } from "react-router-dom";

// CSS import
import styles from "./MembersOnlyWindow.module.css";

export default function MembersOnlyWindow({setGetToken}){
    function logout(e){
        e.preventDefault();
        setGetToken(true);
    }

    return(
        <div className={styles.container}>
            <div className={styles.gridTable}>
                <div className={styles.image}/>
                <div className={styles.element}>
                    <div className={styles.topContainer}>
                        <div className={styles.nickName}>닉네임</div>
                        <button className={styles.buttonLogout} onClick={logout}>로그아웃</button>
                    </div>
                    <div className={styles.email}>test@123.com</div>
                    <div className={styles.userData}>
                        <Link className={styles.link}>
                            <span className={styles.linkTitle}>게시글</span>
                            <span className={styles.linkElement}>9999+</span>
                        </Link>
                        <Link className={styles.link}>
                            <span className={styles.linkTitle}>댓글</span>
                            <span className={styles.linkElement}>9999+</span>
                        </Link>
                    </div>
                </div>
                <button className={styles.buttonEditProfile}>프로필 수정</button>
            </div>
        </div>
    );
};