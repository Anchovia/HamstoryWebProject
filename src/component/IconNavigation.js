import iconGit from '../images/image_icon_git.png'
import iconInfo from '../images/image_icon_info.png'
import iconMenu from '../images/image_icon_menu.png'

import styles from "./IconNavigation.module.css";

export default function IconNavigation(){
    return (
        <a href="/" className={styles.iconNavigation}>
            <img src={iconGit} alt="IconGit"/>
            <img src={iconInfo} alt="IconInfo"/>
            <img src={iconMenu} alt="IconMenu"/>
        </a>
    )
}