import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_POST_ONE_BOARD } from '../../config/config';

import styles from './PostDetail.module.css';

import Loading from "../Loading";

import BackButton from '../button/BackButton';
import LikeCounter from '../analytics/LikeCounter';
import PostProfile from './PostProfile';

export default function PostDetail(){
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
      <BackButton/>
      <div className={styles.element}>
        <div className={styles.title}>{postData.title}</div>
        <PostProfile writer = {postData.writer} createdTime = {postData.createdTime} hits = {postData.hits}/>
        <div className={styles.line}></div>
        <div className={styles.contents}>{postData.contents}</div>
        <LikeCounter likes = {postData.likes}/>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}