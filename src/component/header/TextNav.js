/*
    설명: 텍스트 네비게이션 컴포넌트
*/

// CSS import
import styles from "./TextNav.module.css";

export default function TextNav(){
    // 링크 클릭 시 이벤트
    // HAMSTORT 로고 클릭 시 실행되는 함수
    function hamstoryClick(event){
        event.preventDefault();
    }

    // 커뮤니티 클릭 시 실행되는 함수
    function communityClick(event){ 
        event.preventDefault();
    }
    
    // 위키 클릭 시 실행되는 함수
    function wikiClick(event){
        event.preventDefault();
    }

    // 도움말 클릭 시 실행되는 함수
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