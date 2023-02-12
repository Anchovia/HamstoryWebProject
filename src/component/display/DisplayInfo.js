/*
    설명: 
*/

// 모듈 import
import { useState } from "react";
import AccessibleWindow from "./AccessibleWindow";

// CSS import
import styles from "./DisplayInfo.module.css";
import MembersOnlyWindow from "./MembersOnlyWindow";

export default function DisplayInfo({setInfoFunc}){
    const [display, setDisplay] = useState(false);

    return (
        <div className={styles.display}>
            <div className={styles.element}>
                {display ? <AccessibleWindow setInfoFunc={setInfoFunc}/> : <MembersOnlyWindow setDisplay = {setDisplay}/>}
            </div>
        </div>
    );
}