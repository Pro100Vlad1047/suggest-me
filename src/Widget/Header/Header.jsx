import styles from "./Header.module.scss";
import Logo from "../../Components/UI/logo/logo";
import HeaderLinks from "../../Components/UI/HeaderLinks/HeaderLinks";

const Header = () => {
    return <header className={styles.header}><Logo /><HeaderLinks/></header>;
};

export default Header;
