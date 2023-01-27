import { useState } from "react";
import { Link } from "react-router-dom";

import iconGit from '../../images/icon/image_icon_git.png'
import iconInfo from '../../images/icon/image_icon_info.png'
import iconMenu from '../../images/icon/image_icon_menu.png'
import Displayinfo from "./DisplayInfo";

import styles from "./IconNavigation.module.css";

export default function IconNavigation(){
    const[infoClickJudg, setInfoClickJudg] = useState(false);

    function gitClick(event){
        event.preventDefault();
        window.open("https://github.com/Anchovia/winterWebEtude", "_blank")
    }

    function infoClick(event){
        event.preventDefault();
        setInfoClickJudg(!infoClickJudg)
    }

    return (
        <div className={styles.iconNavigation}>
            <img src={iconGit} alt="IconGit" onClick={gitClick}/>
            <img src={iconInfo} alt="IconInfo" onClick={infoClick}/>
            {infoClickJudg === true ? <Displayinfo/> : null}
            <Link to="/"><img src={iconMenu} alt="IconMenu"/></Link>

        </div>
    )
}