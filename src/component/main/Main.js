// module import
import { useEffect, useState } from "react";

// hook import
import useScrollTop from "../../hooks/useScrollTop";
import useAnimatedVisibility from "../../hooks/useAnimatedVisibility";

// component import
import Header from "../header/Header";
import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";
import Footer from "../footer/Footer";

// css import
import styles from "./Main.module.css";

export default function Main(){
    const [position, setPosition] = useState(0); // 스크롤 위치를 저장할 state
    const [vHeight, setVHeight] = useState(0); // 뷰포트 높이를 저장할 state

    console.log(vHeight)

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

    // 뷰포트 높이를 구하는 useEffect
    useEffect(() => {
        const handleResize = () => {
            setVHeight(window.innerHeight);
        };

        handleResize(); // 초기 사이즈 설정

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    // 스크롤 설정부
    const sendToFeedbackPosition = useAnimatedVisibility(position, 1, 1);

    useScrollTop(); // 스크롤을 최상단으로 이동

    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <Header/>
                <section className={styles.mainTitle}>
                    <MainTitle/>
                </section>
            </header>
            <main className={styles.main}>
                <section className={styles.mainSection}><IndexCommunity isVisible={false}/></section>
                <section className={styles.mainSection}><IndexWiki isVisible={false}/></section>
                <aside className={styles.mainAside}><SendToFeedback setPosition={sendToFeedbackPosition}/></aside>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
}