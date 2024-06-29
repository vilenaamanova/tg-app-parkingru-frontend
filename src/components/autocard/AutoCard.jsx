
import pgoto from "../../assets/новая.svg";
import styles from './AutoCard.module.css'

const AutoCard = (props) => {
    return (

        <div className={styles.card}>
        <div className={styles.card__info}>
            <h2 className={styles.card__model}>{props.car}</h2>
            <p className={styles.card__number}>{props.number}</p>
        </div>
        <img src={pgoto} alt="pgoho"/>


    </div>
)
    ;
};

export default AutoCard;