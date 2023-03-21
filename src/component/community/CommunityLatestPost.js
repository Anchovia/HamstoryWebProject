import styles from './CommunityLatestPost.module.css';

import PostList from "../post/PostList";
import CommunityHeader from './CommunityHeader';
import { URL_GET_BOARD } from '../../config/config';
import useFetch from '../../hooks/useFetch';

export default function CommunityLatestPost(){
    const dummy = [
        {
          id: 18,
          title: "첫 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 17,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 16,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 15,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 14,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 13,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 12,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 11,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 10,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 9,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 8,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 7,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 6,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 5,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },{
          id: 4,
          title: "세 번째 글",
          writer: "홍길동",
          date: "2021-08-01",
          hits: 7,
          likes: 6,
        },
        {
          id: 3,
          title: "happy birth day",
          writer: "아기공룡둘리",
          date: "2021-05-13",
          hits: 103,
          likes: 23,
        },
        {
          id: 2,
          title: "몽글몽글 햄스터",
          writer: "사이노",
          date: "2021-03-05",
          hits: 52,
          likes: 13,
        },
        {
          id: 1,
          title: "우리집 귀여운 포로리",
          writer: "Lirith",
          date: "2021-02-21",
          hits: 73,
          likes: 2,
        }
    ];

    const res = useFetch(URL_GET_BOARD)

    console.log(res.data);

    const posts = dummy;

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
                    <PostList key={post.id} id = {post.id} writer = {post.writer} date = {post.date} title = {post.title} hits = {post.hits} likes = {post.likes} ></PostList>
                ))
            }
        </div>
    );
}