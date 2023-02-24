import styles from "./DetailsProps.module.scss";


const DetailsProps = ({ label, value }) => {
    return (
        <div className={styles.detail_prop}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
        );
}

export default DetailsProps;