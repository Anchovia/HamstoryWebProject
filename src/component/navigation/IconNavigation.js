import iconGit from '../../images/icon/image_icon_git.png'
import iconInfo from '../../images/icon/image_icon_info.png'
import iconMenu from '../../images/icon/image_icon_menu.png'

import styles from "./IconNavigation.module.css";

import { Link } from "react-router-dom";

export default function IconNavigation(){
    function gitClick(){
        window.open("https://github.com/Anchovia/winterWebEtude", "_blank")
    }

    return (
        <div className={styles.iconNavigation}>
            <img src={iconGit} alt="IconGit" onClick={gitClick} className={styles.git}/>
            <Link to="/"><img src={iconInfo} alt="IconInfo"/></Link>
            <Link to="/"><img src={iconMenu} alt="IconMenu"/></Link>
        </div>
    )
}