// CSS import
import styles from "./LoginSelectButton.module.css"

export default function LoginSelectButton(props){
    const handleButtonClick = (judg) => () => {
        if(judg !== props.btnJudg){
            props.setBtnJudg(!props.btnJudg)
        }
    }

    return(
        <div>
            <button className={styles.button} onClick={handleButtonClick(true)}>로그인</button>
            <button className={styles.button} onClick={handleButtonClick(false)}>회원가입</button>
        </div>
    );  
}