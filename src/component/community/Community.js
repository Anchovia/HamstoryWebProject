import CommunityHeader from "./CommunityHeader";

import styles from "./Community.module.css";

export default function Community(){
    return(
        <div className={styles.body}>
            <CommunityHeader/>
        </div>
    );
}