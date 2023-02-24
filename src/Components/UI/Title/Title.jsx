import styles from "./Title.module.scss";

const Title = () => {
    return <div className={styles.title_block}>
                <h1>Suggest.me</h1>
                <h2>Discover new and exciting movies with Suggest.me!</h2>
                <h2>Our platform generates a personalized list of films for you to enjoy, making it easy to find your next favorite.</h2>
        <h2>Give it a try and see what the algorithm suggests for you😉</h2>
           </div>
}

export default Title;