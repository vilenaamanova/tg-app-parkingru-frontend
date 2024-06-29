import styles from "./Card.module.css";
import road from "../../assets/road.svg";
import {Link} from "react-router-dom";

const Card = (props) =>{
    return (
        <div className={styles.section}>
            <div className={styles.history}>
                <h3 className={styles.history__title}>История бронирования</h3>
                <Link to='/history' className={styles.history__link} href='#'>См.историю</Link>
            </div>
            <div className={styles.history__card}>
                <div className={styles.card__title}>Парковочная зона {props.parkingZone}</div>
                <div className={styles.history__date}>Дата: {props.data}</div>
                <div className={styles.history__time}>Время: {props.startTime} - {props.endTime}</div>
                <div className={styles.card__info}>

                    <div className={styles.price}>
                        <img src={road} alt="Home"/><p
                        className={styles.box__distance}>{props.distance} km</p></div>
                    <div className={styles.total__price}>{props.price} RUB</div>
                </div>
            </div>


        </div>
    )
}
export default Card;