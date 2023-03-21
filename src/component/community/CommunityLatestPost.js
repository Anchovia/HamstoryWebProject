// 컴포넌트 import
import CommunityHeader from './CommunityHeader';
import PostList from "../post/PostList";

// config import
import { URL_GET_BOARD } from '../../config/config';

// hook import
import useFetch from '../../hooks/useFetch';

// css import
import styles from './CommunityLatestPost.module.css';

export default function CommunityLatestPost(){
    const res = useFetch(URL_GET_BOARD)
    const posts = res.slice().reverse(); // 배열의 복사본을 만들고 뒤집기

    return(
        <div className={styles.body}>
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