// hook import
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';

// config import
import { URL_GET_BOARD } from '../../config/config';

// component import
import PostList from "../post/PostList";
import Loading from "../Loading";
import Header from '../header/Header';
import CommunityHeader from './CommunityHeader';
import CommunityLatestPostMain from './CommunityLatestPostMain';
import Footer from '../footer/Footer';

// css import
import styles from './CommunityLatestPost.module.css';

export default function CommunityLatestPost(){
    const {data : res, loading} = useFetch(URL_GET_BOARD); // 데이터를 가져오는 hook

    const renderPostList = ({ id, title, writer, createdTime, hits, likes }) => (
        <PostList key={id} id={id} title={title} writer={writer} createdTime={createdTime} hits={hits} likes={likes} />
    );

    const elements = ["제목", "작성자", "작성일", "조회", "좋아요"]

    useScrollTop(); // 스크롤 상단 이동 hook

    return(
        <div className={styles.body}>
            <header className={styles.header}>
                <Header/>
            </header>
            <main className={styles.main}>
                <section>
                    <CommunityHeader/>
                </section>
                <section>
                    {loading ? <Loading/> : <CommunityLatestPostMain elements = {elements} renderPostList = {renderPostList} posts = {res}/>}
                </section>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
}