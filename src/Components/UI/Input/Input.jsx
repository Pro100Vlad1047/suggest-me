import s from "./Input.module.scss";

const inputCategory = ["Any", "Action", "Horror", "Drama", "Comedy"];


const Input = ({ onChange, value }) => {
    /*return <div className={styles.input_wrapper}>
        <div className={styles.input_block}>
            <input id="Any" defaultChecked type="radio" name="genre" />
            <label htmlFor="Any" >Any</label>
        </div>
        <div className={styles.input_block}>
            <input id="Action" type="radio" name="genre" />
            <label htmlFor="Action" >Action</label>
        </div>
        <div className={styles.input_block}>

            <input id="Horror" type="radio" name="genre" />
            <label htmlFor="Horror" >Horror</label>
        </div>
        <div className={styles.input_block}>
            <input id="Drama" type="radio" name="genre" />
            <label htmlFor="Drama" >Drama</label>
        </div>
        <div className={styles.input_block}>
            <input id="Comedy" type="radio" name="genre" />
            <label htmlFor="Comedy" >Comedy</label>
        </div>
    </div>*/


    return (
        <div className={s.input_wrapper}>
            <div className={s.content}>
                {inputCategory.map((element) => {
                    return (
                        <div className={s.input_container} key={element}>
                            <input
                                checked={value === element}
                                onChange={onChange}
                                name="category"
                                id={element}
                                type="radio"
                            />
                            <label htmlFor={element}>{element}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Input;