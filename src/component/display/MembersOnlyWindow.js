// module import
import axios from "axios";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

// config import
import { URL_INFO } from "../../config/config";

// css import
import styles from "./MembersOnlyWindow.module.css";

export default function MembersOnlyWindow({setGetToken}){
    const url = URL_INFO;

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    function logout(e){
        e.preventDefault();
        Cookie.remove("jwt");
        setGetToken(false);
    }

    let getUserData = async(url) => {
        try{
            const res = await axios.get(url, {
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + Cookie.get("jwt"),
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
    }, [url]);

    return(
        <div className={styles.body}>
            <article className={styles.articleBody}>
                <section className={styles.sectionImage}><div className={styles.image}/></section>
                <section className={styles.sectionProfile}>
                    <div className={styles.jwtGridBody}>
                        <p className={styles.name}>{userName}</p>
                        <div>
                            <nav className={styles.logoutBody}><button className={styles.buttonLogout} onClick={logout}>로그아웃</button></nav>
                        </div>
                        <p className={styles.email}>{userEmail}</p>
                        <div/>
                    </div>
                    <div className={styles.linkGridBody}>
                        <p className={styles.linkTitle}>게시글</p>
                        <p className={styles.posts}>0</p>
                        <p className={styles.linkTitle}>댓글</p>
                        <p className={styles.comments}>0</p>
                    </div>
                </section>
            </article>
            <nav>
                <button className={styles.buttonEditProfile}>프로필 수정</button>
            </nav>
        </div>
    );
};