// 컴포넌트 import
import CommunityHeader from "./CommunityHeader";

// css import
import styles from "./Community.module.css";

export default function Community(){
    return(
        <div className={styles.body}>
            <CommunityHeader/>
        </div>
    );
}