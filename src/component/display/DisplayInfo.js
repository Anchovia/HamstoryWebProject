/*
    설명: 
*/

// 모듈 import
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

// 컴포넌트 import
import AccessibleWindow from "./AccessibleWindow";
import MembersOnlyWindow from "./MembersOnlyWindow";

// CSS import
import styles from "./DisplayInfo.module.css";

export default function DisplayInfo({setInfoFunc}){
    const [getToken, setGetToken] = useState(false);

    useEffect(()=>{
        if(!Cookie.get("jwt")){
            return;
        }
        else{
            setGetToken(true);
        }
    }, []);

    return (
        <div className={styles.display}>
            {getToken ? <MembersOnlyWindow setGetToken = {setGetToken}/> : <AccessibleWindow setInfoFunc={setInfoFunc}/>}
        </div>
    );
}