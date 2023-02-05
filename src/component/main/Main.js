/*
    설명: 메인 페이지
*/

// 모듈 import
import { useEffect, useState } from "react";

// 컴포넌트 import
import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";

// CSS import
import styles from "./Main.module.css";

export default function Main(){
    // 스크롤 위치를 저장할 state
    const[position, setPosition] = useState(0);

    // 스크롤 이벤트
    function onScroll(){
        setPosition(window.scrollY);
    }
    
    // 스크롤 이벤트 등록
    useEffect(() => {
        // 스크롤 위치를 맨 위로 이동
        window.scrollTo({
            top:0
        })
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div className={styles.main}>
            <MainTitle/>
            <IndexCommunity position={position}/>
            <IndexWiki position={position}/>
            <SendToFeedback position={position}/>
        </div>
    );
}