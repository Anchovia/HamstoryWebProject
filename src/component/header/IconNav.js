/*
    설명: 상단의 아이콘 네비게이션을 구성하는 컴포넌트
*/

// 모듈 import
import { useState } from "react";

// 이미지 import
import iconGit from '../../images/icon/image_icon_git.png'
import iconInfo from '../../images/icon/image_icon_info.png'
import iconMenu from '../../images/icon/image_icon_menu.png'

// 컴포넌트 import
import Displayinfo from "../display/DisplayInfo";
import DisplayMenu from "../display/DisplayMenu";

// CSS import
import styles from "./IconNav.module.css";

export default function IconNav(){
    // DisplayInfo, DisplayMenu 컴포넌트의 display 속성을 변경하기 위한 state
    const[isInfo, setIsInfo] = useState(false);
    const[isMenu, setIsMenu] = useState(false);

    // 각 아이콘을 클릭했을 때 실행되는 함수
    function gitClick(event){ // git 아이콘 클릭 시 실행되는 함수
        event.preventDefault();
        window.open("https://github.com/Anchovia/winterWebEtude", "_blank")
    }

    function infoClick(event){ // info 아이콘 클릭 시 실행되는 함수
        event.preventDefault();
        if(isMenu){
            setIsMenu(false);
            setIsInfo(true);
        }
        else{
            setIsInfo(!isInfo);
        }
    }

    function menuClick(event){ // menu 아이콘 클릭 시 실행되는 함수
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
            <nav className={styles.iconNav}>
                <div className={styles.container}>
                    <img src={iconGit} alt="IconGit" onClick={gitClick}/>
                </div>
                <div className={styles.container}>
                    <img src={iconInfo} alt="IconInfo" onClick={infoClick}/>
                </div>
                <div className={styles.container}>
                    <img src={iconMenu} alt="IconMenu" onClick={menuClick}/>
                </div>
            </nav>
            {isInfo ? <Displayinfo setInfoFunc={setIsInfo}/> : null}
            {isMenu ? <DisplayMenu/> : null}
        </>
    )
}