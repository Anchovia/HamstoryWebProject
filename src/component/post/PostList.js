// CSS import
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

export default function PostList(props){
    const dataList = ["id", "title", "writer", "createdTime", "hits", "likes"]
    const datas = Object.values(props);

    return (
        <Link to={"/community/latestPost/"+props.id} className={styles.gridHelper}>
            {datas.map((data, index) => (
                <div key={dataList[index]} className={dataList[index] === "title" ? styles.title : styles.text}>
                    {data}
                </div>
            ))}
        </Link>
    );
}