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

// 훅 import
import useScrollTop from "../../hooks/useScrollTop";
import useAnimatedVisibility from "../../hooks/useAnimatedVisibility";

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
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    // 스크롤 설정부
    const indexCommunityVisibility = useAnimatedVisibility(position, 310, 1800);
    const indexWikiVisibility = useAnimatedVisibility(position, 1230, 2699);
    const sendToFeedbackPosition = 1280 + (position - 2160) * 1.67;

    useScrollTop(); // 스크롤을 최상단으로 이동 

    return (
        <div className={styles.main}>
            <MainTitle/>
            <IndexCommunity isVisible={indexCommunityVisibility}/>
            <IndexWiki isVisible={indexWikiVisibility}/>
            <SendToFeedback setPosition={sendToFeedbackPosition}/>
        </div>
    );
}