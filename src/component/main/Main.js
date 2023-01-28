import { useEffect, useState } from "react";

import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";

import styles from "./Main.module.css";

export default function Main(){
    const[position, setPosition] = useState(0);

    function onScroll(){
        setPosition(window.scrollY);
    }
    useEffect(() => {
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