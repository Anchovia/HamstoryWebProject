import MainTitle from "./MainTitle";

import styles from "./MainIndex.module.css";

export default function MainIndex(){
    return (
        <div className={styles.main}>
            <MainTitle/>
        </div>
    );
}