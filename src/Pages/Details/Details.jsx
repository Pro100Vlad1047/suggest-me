//import { Card } from "../";
import styles from "./Details.module.scss";
import Rate from "../../Components/UI/Rate/Rate";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import DetailsTitle from "../../Components/UI/DetailsTitle/DetailsTitle";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";


/*Image import*/
/*import AvengersPoster from "../../assets/images/Avengers_poster.jpg";
import AvengersImage from "../../assets/images/Avengers.jpg";
import WidowImage from "../../assets/images/Black_widow.jpg";
import LokiImage from "../../assets/images/Loki.jpg";
import ShangChiImage from "../../assets/images/ShangChi.jpg";
import MotherImage from "../../assets/images/Mother.jpg";
import HeistImage from "../../assets/images/Heist.jpg";
import FriendsImage from "../../assets/images/Friends.jpg";
import BigBangImage from "../../assets/images/BigBang.jpg";
import TwoMenImage from "../../assets/images/TwoMen.jpg";*/
////////////////////////////////////////



/*const data = [
    {
        id: 1,
        title: "Black Widow",
        background: WidowImage,
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        background: ShangChiImage,
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        background: LokiImage,
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        background: MotherImage,
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        background: HeistImage,
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        background: FriendsImage,
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        background: BigBangImage,
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        background: TwoMenImage,
        rate: 7,
    },
];
*/

const Details = () => {
    //eslint-disable-next-line
    const [movie, setMovie] = useState({});

    const params = useParams();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(
                    `https://cogitize-practice-suggest.onrender.com/movie/${params.id}`
                );
                const data = await response.json();

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };

        getMovie();
    }, [params]);

    const getStringGenres = () => {
        return movie.genres?.map((genre) => genre.name).join(", ");
    };

    const getStringDate = (movieDate) => {
        let string = "";

        if (!movieDate) {
            return string;
        }

        const date = new Date(movieDate);
        string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        return string;
    };

    
    return <div className={styles.layout_wrapper}>
        <div className={styles.layout_block}>
            <div className={styles.poster_block}><img src={movie.backdrop} className={styles.poster} alt="Poster" /></div>
            <div className={styles.details_block}>
                <img className={styles.detailImage } src={movie.poster} alt="Images" />
                <div className={styles.props_block}>
                    <p className={styles.title}>{movie.tagline}</p>
                    <p className={styles.subtitle}>{movie.description}</p>
                    <Rate rate={movie.rating} /> 
                    <DetailsProps label={"Type"} value={movie.type} />
                    <DetailsProps label={"Release Date"} value={getStringDate(movie.date)} />
                        <DetailsProps
                            label={"Genres"}
                            value={getStringGenres(movie.genres)}
                        />
                </div>
                <div className={styles.title_absolute}><DetailsTitle genres={getStringGenres(movie.genres)} title={movie.title} /></div>
            </div>
        </div>
    </div>
}

export default Details;
