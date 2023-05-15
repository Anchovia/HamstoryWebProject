// 모듈 import
import { Link, useLocation } from 'react-router-dom';

// css import
import styles from './CommunityHeader.module.css';

export default function CommunityHeader() {
    const basePath = '/community'; // 기본 주소
    const location = useLocation(); // 현재 url을 location에 반환

    // 메뉴 주소들 모음
    const menuItems = [
        { name: '공지사항', path: basePath + '/notice' },
        { name: '베스트 글', path: basePath + '/bestPost' },
        { name: '최신 글', path: basePath + '/latestPost' },
        { name: '자유게시판', path: basePath + '/freeBoard' },
        { name: '햄스토리 앨범', path: basePath + '/album' },
    ];

    return (
        <div className={styles.body}>
        {menuItems.map((item, index) => (
            item.path ? (
            <Link key={index} to={item.path} className={`${styles.link} ${location.pathname === item.path ? styles.activeLink : ''}`}>
                <div className={styles.container}>{item.name}</div>
            </Link>
            ) : (
            <div key={index} className={styles.container}>{item.name}</div>
            )
        ))}
        </div>
    );
}