import styles from "./Card.module.scss";
//import WidowPhoto from "../../../assets/images/Black_widow.jpg";
import Rate from "../Rate/Rate";

const Card = ({data}) => {
    return <div className={styles.card_block}>
        <img src={data.poster} alt="Card_photo" />
        <p>{data.title}</p>
        <div className={styles.rate_style}>
                <Rate rate={data.rating} />
            </div>
           </div>
}

export default Card;