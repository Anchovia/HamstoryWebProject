import iconGoToUp from '../../images/icon/image_icon_goToUp.png'

import styles from "./GoToUpButton.module.css"

export default function GoToUpButton(){
    function onClick(){
        if(!window.scrollY){
            return;
        }

        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    };

    return (
        <div>
            <img src={iconGoToUp} alt="IconGoToUp" onClick={onClick} className={styles.button}/>
        </div>
    );
}