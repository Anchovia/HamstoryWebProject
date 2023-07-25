// module import
import { useState } from "react";
import { Link } from "react-router-dom";

// hook import
import useScrollTop from "../../hooks/useScrollTop";

// component import
import Member from "./Member";
import LoginSelectButton from "../button/LoginSelectButton";
import SignUp from "./SignUp";
import Footer from "../footer/Footer";

// css import
import styles from "./Login.module.css";

export default function Login(){
    const [btnJudg, setBtnJudg] = useState<boolean>(true);

    useScrollTop(); // 스크롤을 최상단으로 이동

    return (
        <div className={styles.body}>
            <main className={styles.main}>
                <section>
                    <Link to="/"><h1>HAMSTORY</h1></Link>
                </section>
                <section className={styles.interactionSection}>
                    <LoginSelectButton btnJudg = {btnJudg} setBtnJudg = {setBtnJudg}/>
                    {btnJudg === true  ? <Member/> : <SignUp setBtnJudg = {setBtnJudg}/>}
                </section>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
}