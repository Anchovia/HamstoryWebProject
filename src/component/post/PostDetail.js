// module import
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_POST_ONE_BOARD } from '../../config/config';

// component import
import Loading from "../Loading";
import BackButton from '../button/BackButton';
import LikeCounter from '../analytics/LikeCounter';
import PostProfile from './PostProfile';
import Header from '../header/Header';
import Footer from '../footer/Footer';

// css import
import styles from './PostDetail.module.css';

export default function PostDetail(){const { postId } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(URL_POST_ONE_BOARD + postId)
      const res = await axios.get(URL_POST_ONE_BOARD + postId)

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
      <header className={styles.header}><Header/></header>
      <main className={styles.main}>
        <div/>
        <article className={styles.articleBody}>
          <section className={styles.sectionTitle}>
            <h1 className={styles.title}>{postData.title}</h1>
            <nav><BackButton/></nav>
          </section>
          <section className={styles.sectionProfile}>
            <PostProfile writer = {postData.writer} createdTime = {postData.createdTime} hits = {postData.hits}/>
          </section>
          <hr/>
          <section className={styles.sectionContents}>
            <p className={styles.contentsText}>{postData.contents}</p>
          </section>
          <section className={styles.sectionLikes}><LikeCounter likes = {postData.likes}/></section>
        </article>
        <div/>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  );
}