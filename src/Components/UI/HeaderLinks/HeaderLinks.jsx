import styles from "./HeaderLinks.module.scss";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
    return <div className={styles.link_block}>
        <Link to="pixabay">Pixabay</Link>
                <a>TV Shows</a>
                <a>Suggest me &rarr;</a>
           </div>
}

export default HeaderLinks;