// css import
import styles from "./AccessibleWindow.module.css";
import MoveLoginButton from "../button/MoveLoginButton";

export default function AccessibleWindow({setInfoFunc}){
    const TEXT_TITLE = "로그인이 필요합니다."
    const TEXT_CONTENTS = "현재 비회원 상태입니다."

    return(
        <div className={styles.body}>
            <section>
                <h1 className={styles.title}>{TEXT_TITLE}</h1>
                <h3 className={styles.contents}>{TEXT_CONTENTS}</h3>
            </section>
            <nav>
                <MoveLoginButton setInfoFunc={setInfoFunc}/>
            </nav>
        </div>
    );
}