import styles from "./DetailsTitle.module.scss";

const DetailsTitle = ({genres,title}) => {
    
    return <div className={styles.title_block}>
        <a>{genres}</a>
        <h1>{title}</h1>
           </div>
}

export default DetailsTitle;