import styles from "./TextNav.module.css";

export default function TextNav(){
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
        <nav className={styles.textNav}>
            <div className={styles.container} onClick={hamstoryClick}>
                <div className={styles.title}>햄스토리</div>
            </div>
            <div className={styles.container} onClick={communityClick}>
                <div className={styles.title}>커뮤니티</div>
            </div>
            <div className={styles.container} onClick={wikiClick}>
                <div className={styles.title}>위키</div>
            </div>
            <div className={styles.container} onClick={helpClick}>
                <div className={styles.title}>도움말</div>
            </div>
        </nav>
    );
}