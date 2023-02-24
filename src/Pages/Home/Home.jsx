//import { Card } from "../";
import styles from "./Home.module.scss";
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import TextGenre from "../../Components/UI/TextGenreAmount/TextGenre";
import Card from "../../Components/UI/Card/Card";
import QuestionSearch from "../../Components/UI/QuestionSearch/Question";
import PurpleButton from "../../Components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/*import WidowImage from "../../assets/images/Black_widow.jpg";
import LokiImage from "../../assets/images/Loki.jpg";
import ShangChiImage from "../../assets/images/ShangChi.jpg";
import MotherImage from "../../assets/images/Mother.jpg";
import HeistImage from "../../assets/images/Heist.jpg";
import FriendsImage from "../../assets/images/Friends.jpg";
import BigBangImage from "../../assets/images/BigBang.jpg";
import TwoMenImage from "../../assets/images/TwoMen.jpg";
*/


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState("Any");

    const getMovies = async () => {
        try {
            const response = await fetch(
                `https://cogitize-practice-suggest.onrender.com/movie/list`
            );
            const data = await response.json();

            setMovies(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    const getMoviesForQuery = async (value) => {
        try {
            const response = await fetch(
                `https://cogitize-practice-suggest.onrender.com/movie/list?category=${value}`
            );
            const data = await response.json();

            setMovies(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleInput = (e) => {
        const value = e.target.id;
        setInputValue(value);

        getMoviesForQuery(value);
    };
        

    return <div className={styles.layout_wrapper}>
        <div className={styles.layout_block}>
            <Title />
            <Input onChange={handleInput} value={inputValue} />
            <TextGenre />
            <div className={styles.card_wrapper}>
                {movies.map((item) => {
                    return (
                        <div key={item._id}>
                            <Link to={`details/${item._id}`}>
                                <Card data={item} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <QuestionSearch />
            <PurpleButton />
        </div>
    </div>
}

export default Home;
