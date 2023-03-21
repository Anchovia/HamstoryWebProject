// 모듈 import
import { useState } from 'react';

// 이미지 import
import iconGit from '../../images/icon/image_icon_git.png';
import iconInfo from '../../images/icon/image_icon_info.png';
import iconMenu from '../../images/icon/image_icon_menu.png';

// 컴포넌트 import
import Displayinfo from '../display/DisplayInfo';
import DisplayMenu from '../display/DisplayMenu';

// CSS import
import styles from './IconNav.module.css';

export default function IconNav() {
    const [displayedComponent, setDisplayedComponent] = useState(null);

    const handleIconClick = (event, componentName) => {
        event.preventDefault();

        if(componentName === 'git') {
        window.open('https://github.com/Anchovia/winterWebEtude', '_blank');

        return;
        }

        if(displayedComponent === componentName) {
        setDisplayedComponent(null);
        }
        else{
        setDisplayedComponent(componentName);
        }
    };
    
    return(
    <>
        <nav className={styles.iconNav}>
            {[
                { src: iconGit, alt: 'IconGit', componentName: 'git' },
                { src: iconInfo, alt: 'IconInfo', componentName: 'info' },
                { src: iconMenu, alt: 'IconMenu', componentName: 'menu' },
                ].map((icon) => (
                <div key={icon.alt} className={styles.container}>
                    <img
                    src={icon.src}
                    alt={icon.alt}
                    onClick={(event) => handleIconClick(event, icon.componentName)}
                    />
                </div>
            ))}
      </nav>
      {displayedComponent === 'info' && <Displayinfo setInfoFunc={setDisplayedComponent} />}
      {displayedComponent === 'menu' && <DisplayMenu />}
    </>
  );
}
