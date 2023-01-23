import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";
import Bottom from "./Bottom";

import styles from "./MainIndex.module.css";

export default function MainIndex(){
    return (
        <div className={styles.main}>
            <MainTitle/>
            <IndexCommunity/>
            <IndexWiki/>
            <SendToFeedback/>
            <Bottom/>
        </div>
    );
}