import styles from "./Logo.module.scss";
import PurpleTriangle from "../../../assets/images/Vectorpurple_triangle.svg";
import BlueTriangle from "../../../assets/images/Vectorblue_triangle.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return <div className={styles.logo_main}>
           <Link to="/">
                <img src={BlueTriangle} alt="logo" />
                <img src={PurpleTriangle} alt="logo" />
           </Link>
    </div>
}

export default Logo;