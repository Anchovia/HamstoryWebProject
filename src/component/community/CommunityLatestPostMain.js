// component import
import CommunityHeader from './CommunityHeader';
import PostingButton from '../button/PostingButton';

// css import
import styles from './CommunityLatestPostMain.module.css';

export default function CommunityLatestPostMain(props){
    return(
        <div>
            <PostingButton/>
            <CommunityHeader/>
            <div className={styles.communityLatestPostHeader}>
            {props.elements.map((element) => (
                <div key={element} className={styles.headerContents}>{element}</div>
            ))}
            </div>
            {props.posts.map(props.renderPostList)}
        </div>
    );
}