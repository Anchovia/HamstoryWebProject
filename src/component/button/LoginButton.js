import styles from "./LoginButton.module.css";

export default function LoginButton(props){
    return(
        <button className={styles.button} onClick={props.loginFunc}>로그인</button>
    );
}