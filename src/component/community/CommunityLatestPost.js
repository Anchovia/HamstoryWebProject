// 컴포넌트 import
import CommunityHeader from './CommunityHeader';
import PostList from "../post/PostList";
import Loading from "../Loading";
import PostingButton from '../button/PostingButton';

// config import
import { URL_GET_BOARD } from '../../config/config';

// hook import
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';

// css import
import styles from './CommunityLatestPost.module.css';

export default function CommunityLatestPost(){
    const {data : res, loading} = useFetch(URL_GET_BOARD); // 데이터를 가져오는 hook
    const posts = res.slice().reverse(); // 배열의 복사본을 만들고 뒤집기

    useScrollTop(); // 스크롤 상단 이동 hook


    // 데이터 비로딩시 로딩 효과
    if(loading){
        return(
            <Loading/>
        );
    }

    const renderPostList = ({ id, title, writer, createdTime, hits, likes }) => (
        <PostList key={id} id={id} title={title} writer={writer} createdTime={createdTime} hits={hits} likes={likes} />
    );

    return(
        <div className={styles.body}>
            <PostingButton/>
            <CommunityHeader/>
            <div className={styles.communityLatestPostHeader}>
                <div className={styles.headerContents}>제목</div>
                <div className={styles.headerContents}>작성자</div>
                <div className={styles.headerContents}>작성일</div>
                <div className={styles.headerContents}>조회</div>
                <div className={styles.headerContents}>좋아요</div>
            </div>
            {posts.map(renderPostList)}
        </div>
    );
}