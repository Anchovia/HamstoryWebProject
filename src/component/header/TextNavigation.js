import styles from "./TextNavigation.module.css";

export default function TextNavigation(){
    function hamstoryClick(event){
        event.preventDefault();
    }

    function communityClick(event){
        event.preventDefault();
    }
    
    function wikiClick(event){
        event.preventDefault();
    }

    function helpClick(event){
        event.preventDefault();
    }

    return (
        <nav className={styles.textNavigation}>
            <div className={styles.container} onClick={hamstoryClick}>
                <div className={styles.text}>햄스토리</div>
            </div>
            <div className={styles.container} onClick={communityClick}>
                <div className={styles.text}>커뮤니티</div>
            </div>
            <div className={styles.container} onClick={wikiClick}>
                <div className={styles.text}>위키</div>
            </div>
            <div className={styles.container} onClick={helpClick}>
                <div className={styles.text}>도움말</div>
            </div>
        </nav>
    );
}