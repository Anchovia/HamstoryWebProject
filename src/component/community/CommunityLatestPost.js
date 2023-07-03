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
import Header from '../header/Header';
import Footer from '../footer/Footer';

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

    const elements = ["제목", "작성자", "작성일", "조회", "좋아요"]

    return(
        <>
            <Header/>
            <div className={styles.body}>
                <PostingButton/>
                <CommunityHeader/>
                <div className={styles.communityLatestPostHeader}>
                    {elements.map((element) => (
                        <div key={element} className={styles.headerContents}>
                            {element}
                        </div>
                    ))}
                </div>
                {posts.map(renderPostList)}
            </div>
            <Footer/>
        </>
    );
}