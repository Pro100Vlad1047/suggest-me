import styles from "./Rate.module.scss";
import StarImage from "../../../assets/images/star.svg";

const Rate = ({ rate }) => {
    rate = Number(rate).toFixed(1);
    return <div className={styles.rate_block}><img src={StarImage} alt="rate" /><p>{rate}</p></div>
}

export default Rate;