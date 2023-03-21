import { Link } from 'react-router-dom';
import styles from './CommunityHeader.module.css';

export default function CommunityHeader() {
    const basePath = '/community';

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
            <Link key={index} to={item.path} className={styles.link}>
                <div className={styles.container}>{item.name}</div>
            </Link>
            ) : (
            <div key={index} className={styles.container}>{item.name}</div>
            )
        ))}
        </div>
    );
}