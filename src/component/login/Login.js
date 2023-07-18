// module import
import { Link } from "react-router-dom";

// hook import
import useScrollTop from "../../hooks/useScrollTop";

// component import
import Member from "./Member";
import SignUp from "./SignUp";
import Footer from "../footer/Footer";

// css import
import styles from "./Login.module.css";
export default function Login(){
    useScrollTop(); // 스크롤을 최상단으로 이동

    const btnJudg = true;

    return (
        <div className={styles.body}>
            <main className={styles.main}>
                <section>
                    <Link to="/"><h1>HAMSTORY</h1></Link>
                </section>
                <section>
                    <button>회원</button>
                    <button>비회원</button>
                </section>
                <section>
                    {btnJudg === true  ? <Member/> : <SignUp/>}
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}