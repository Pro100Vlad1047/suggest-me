import styles from "./Pixabay.module.scss";
import { useEffect, useRef, useState } from "react";

const API_KEY = "33822066-1560c556d48da2ad1266a4aa0";

const Pixabay = () => {
    const [images, setImages] = useState([]);
    const timer = useRef(null);

    const getImages = async (value) => {
        try {
            const response = await fetch(
                `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo`
            );
            const { hits } = await response.json();
            setImages(hits);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    useEffect(() => {
        getImages("car");

        return () => {
            console.log("Unmount component");
        };
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;

        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            getImages(value);
        }, 1000);
    };



    return (
        <div className={styles.pixabay_wrapper}>
            <input onChange={handleChange} />
            <ul className={styles.list}>
                {images.map((image) => {
                    return (
                        <li key={image.id}>
                            <img src={image.webformatURL} alt="animals" />
                        </li>
                    );
                })}
            </ul>
        </div>
        
    );
}

export default Pixabay;