import { Link, useLocation } from 'react-router-dom';
import styles from './CommunityHeader.module.css';

export default function CommunityHeader() {
    const nowLocation = useLocation();

    const menuItems = [
        { name: '공지사항', path: nowLocation.pathname + '/notice' },
        { name: '베스트 글', path: nowLocation.pathname + '/bestPost' },
        { name: '최신 글', path: nowLocation.pathname + '/latestPost' },
        { name: '자유게시판', path: nowLocation.pathname + '/freeBoard' },
        { name: '햄스토리 앨범', path: nowLocation.pathname + '/album' },
    ];

    return (
        <div className={styles.body}>
        {menuItems.map((item, index) => (
            item.path ? (
            <Link key={index} to={item.path}>
                <div className={styles.container}>{item.name}</div>
            </Link>
            ) : (
            <div key={index} className={styles.container}>{item.name}</div>
            )
        ))}
        </div>
    );
}