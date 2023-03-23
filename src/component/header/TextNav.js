// 모듈 import
import { Link } from 'react-router-dom';

// CSS import
import styles from './TextNav.module.css';

export default function TextNav() {
    const menuItems = [
        { name: '햄스토리', path: '/hamstory' },
        { name: '커뮤니티', path: '/community' },
        { name: '위키', path: 'wiki' },
        { name: '도움말', path: 'help' },
    ];

  return (
    <nav className={styles.textNav}>
      {menuItems.map((item, index) => (
        item.path ? (
          <Link key={index} to={item.path} className={styles.link}>
            <div className={styles.container}>
              <div className={styles.title}>{item.name}</div>
            </div>
          </Link>
        ) : (
          <div key={index} className={styles.container}>
            <div className={styles.title}>{item.name}</div>
          </div>
        )
      ))}
    </nav>
  );
}