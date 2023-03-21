/*
    설명: 화면 상단으로 이동하는 버튼 컴포넌트
*/

// 이미지 import
import iconGoToUp from '../../images/icon/image_icon_goToUp.png'

// CSS import
import styles from "./GoToUpButton.module.css"

export default function GoToUpButton(){
    // 화면 상단으로 이동하는 함수
    function onClick(){
        // 스크롤 위치가 없을 경우, 함수 종료
        if(!window.scrollY){
            return;
        }
        
        // 스크롤 위치를 맨 위로 이동
        window.scrollTo({
            top : 0,
            behavior : 'smooth' // 부드러운 스크롤
        });
    };

    return (
        <>
            <img src={iconGoToUp} alt="IconGoToUp" onClick={onClick} className={styles.button}/>
        </>
    );
}