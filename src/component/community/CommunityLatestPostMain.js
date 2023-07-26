// css import
import styles from './CommunityLatestPostMain.module.css';

export default function CommunityLatestPostMain(props){
    const textTitle = "최신 글"

    return(
        <div className={styles.body}>
            <div/>
            <main className={styles.mainBody}>
                <h4 className={styles.titleText}>{textTitle}</h4>
                <section className={styles.sectionHeader}>
                    {props.elements.map((element) => (
                        <div key={element} className={styles.headerContents}>{element}</div>
                    ))}
                </section>
                <section className={styles.sectionPost}>
                    {props.posts.map(props.renderPostList)}
                </section>
            </main>
            <div/>
        </div>
    );
}