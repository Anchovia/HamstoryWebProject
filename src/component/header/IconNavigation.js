import { useState } from "react";

import iconGit from '../../images/icon/image_icon_git.png'
import iconInfo from '../../images/icon/image_icon_info.png'
import iconMenu from '../../images/icon/image_icon_menu.png'
import Displayinfo from "./DisplayInfo";
import MenuBar from "./MenuBar";

import styles from "./IconNavigation.module.css";

export default function IconNavigation(){
    const[isInfo, setIsInfo] = useState(false);
    const[isMenu, setIsMenu] = useState(false);

    function gitClick(event){
        event.preventDefault();
        window.open("https://github.com/Anchovia/winterWebEtude", "_blank")
    }

    function infoClick(event){
        event.preventDefault();
        if(isMenu){
            setIsMenu(false);
            setIsInfo(true);
        }
        else{
            setIsInfo(!isInfo);
        }
    }

    function menuClick(event){
        event.preventDefault();
        if(isInfo){
            setIsInfo(false);
            setIsMenu(true);
        }
        else{
            setIsMenu(!isMenu);
        }
    }

    return (
        <>
            <div className={styles.iconNavigation}>
                <div className={styles.container}>
                    <img src={iconGit} alt="IconGit" onClick={gitClick}/>
                </div>
                <div className={styles.container}>
                    <img src={iconInfo} alt="IconInfo" onClick={infoClick}/>
                </div>
                <div className={styles.container}>
                    <img src={iconMenu} alt="IconMenu" onClick={menuClick}/>
                </div>
            </div>
            {isInfo ? <Displayinfo setInfoFunc={setIsInfo}/> : null}
            {isMenu ? <MenuBar/> : null}
        </>
    )
}