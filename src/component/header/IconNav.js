// module import
import { useState } from 'react';

// component import
import Displayinfo from '../display/DisplayInfo';
import DisplayMenu from '../display/DisplayMenu';

// config import
import { SRC_ICON_GIT, SRC_ICON_INFO, SRC_ICON_MENU } from '../../config/config';

// css import
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
            <nav className={styles.body}>
                {[
                    { src: SRC_ICON_GIT, alt: 'IconGit', componentName: 'git' },
                    { src: SRC_ICON_INFO, alt: 'IconInfo', componentName: 'info' },
                    { src: SRC_ICON_MENU, alt: 'IconMenu', componentName: 'menu' },
                    ].map((icon) => (
                    <div key={icon.alt} className={styles.container} onClick={(event) => handleIconClick(event, icon.componentName)}>
                        <img
                        src={icon.src}
                        alt={icon.alt}
                        />
                    </div>
                ))}
            </nav>
        {displayedComponent === 'info' && <Displayinfo setInfoFunc={setDisplayedComponent} />}
        {displayedComponent === 'menu' && <DisplayMenu />}
        </>
    );
}
