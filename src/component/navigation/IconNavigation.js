import iconGit from '../../images/icon/image_icon_git.png'
import iconInfo from '../../images/icon/image_icon_info.png'
import iconMenu from '../../images/icon/image_icon_menu.png'

import styles from "./IconNavigation.module.css";

import { Link } from "react-router-dom";

export default function IconNavigation(){
    return (
        <Link to="/" className={styles.iconNavigation}>
            <img src={iconGit} alt="IconGit"/>
            <img src={iconInfo} alt="IconInfo"/>
            <img src={iconMenu} alt="IconMenu"/>
        </Link>
    )
}