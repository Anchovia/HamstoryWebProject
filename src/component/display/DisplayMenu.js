import styles from "./DisplayMenu.module.css";

export default function DisplayMenu(){
    return(
        <div className={[styles.display, styles.fadeInRight].join(" ")}>
        </div>
    );
}