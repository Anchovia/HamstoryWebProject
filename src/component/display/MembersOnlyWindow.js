// 모듈 import
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CSS import
import styles from "./MembersOnlyWindow.module.css";

export default function MembersOnlyWindow({setGetToken}){
    const url = "http://localhost:8080/info"

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    function logout(e){
        e.preventDefault();
        localStorage.removeItem('jwt');
        setGetToken(false);
    }

    let getUserData = async(url) => {
        try{
            const res = await axios.get(url, {
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt"),
                }
            });

            setUserEmail(res.data.memberEmail)
            setUserName(res.data.memberName)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getUserData(url);
    }, []);

    return(
        <div className={styles.gridTable}>
            <div className={styles.image}/>
            <div className={styles.element}>
                <div className={styles.topContainer}>
                    <div className={styles.nickName}>{userName}</div>
                    <button className={styles.buttonLogout} onClick={logout}>로그아웃</button>
                </div>
                <div className={styles.email}>{userEmail}</div>
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
    );
};