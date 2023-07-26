// css import
import styles from './CommunityLatestPostMain.module.css';

export default function CommunityLatestPostMain(props){
    return(
        <div className={styles.body}>
            <div/>
            <main className={styles.mainBody}>
                <section className={styles.header}>
                    {props.elements.map((element) => (
                        <div key={element} className={styles.headerContents}>{element}</div>
                    ))}
                </section>
                <section>
                    {props.posts.map(props.renderPostList)}
                </section>
            </main>
            <div/>
        </div>
    );
}