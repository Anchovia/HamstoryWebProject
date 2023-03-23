// 컴포넌트 import
import CommunityHeader from './CommunityHeader';
import PostList from "../post/PostList";
import Loading from "../Loading";

// config import
import { URL_GET_BOARD } from '../../config/config';

// hook import
import useFetch from '../../hooks/useFetch';

// css import
import styles from './CommunityLatestPost.module.css';
import PostingButton from '../button/PostingButton';
import useScrollTop from '../../hooks/useScrollTop';

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
                {
                    posts.map((post, index) => (
                        <PostList key={post.id} id = {post.id} title = {post.title} writer = {post.writer} createdTime = {post.createdTime} hits = {post.hits} likes = {post.likes} ></PostList>
                    ))
                }
        </div>
    );
}