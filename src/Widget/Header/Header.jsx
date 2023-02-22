import styles from "./Header.module.scss";
import icons from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className={styles.header}>
            <Link to="/">
            <img src={icons} alt="logo"/>
            </Link>

            <div className={styles.menu}>
              <div className={styles.tablets}>
                  <a href="#">Movies</a>
                  <a href="#">TV Shows</a>
              </div>
                <div className={styles.suggest}>
                  <a href="#">Suggest me</a>
                  <img src={arrow} alt="arrow" />
                </div>
            </div>
        </header>;
};

export default Header;
