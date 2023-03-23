import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_POST_ONE_BOARD } from '../../config/config';

import styles from './PostDetail.module.css';

import iconLikes from '../../images/icon/image_icon_likes.png';
import Loading from "../Loading";

export default function PostDetail() {
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(URL_POST_ONE_BOARD, {
        postId,
      });

      const {
        title,
        writer,
        createdTime,
        hits,
        contents,
        likes,
        category,
      } = res.data;

      setPostData({
        title,
        writer,
        createdTime,
        hits,
        contents,
        likes,
        category,
      });
    };

    fetchData();
  }, [postId]);

  // 로딩 효과
  if (!postData) {
    return(
      <Loading/>
    );
  }

  return (
    <div className={styles.body}>
        <div className={styles.element}>
            <div className={styles.title}>{postData.title}</div>
            <div className={styles.grandGridHelper}>
                <div className={styles.profile}/>
                <div className={styles.detailGridHelper}>
                    <div className={styles.writer}>{postData.writer}</div>
                    <div className={styles.finalGridHelper}>
                        <div className={styles.createdTime}>{postData.createdTime}</div>
                        <div className={styles.hits}>조회 {postData.hits}</div>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.contents}>{postData.contents}</div>
            <div className={styles.likesBody}>
                <img alt="Like icon" src={iconLikes} className={styles.likesImg}/>
                <span className={styles.likesText}>좋아요 {postData.likes}</span>
            </div>
            <div className={styles.line}></div>
        </div>
    </div>
  );
}