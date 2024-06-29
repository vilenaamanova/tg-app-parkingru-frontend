import styles from "./Ticket.module.css";
import road from "../../assets/road.svg";
import timezone from "../../assets/timezone.svg";
import dots from "../../assets/dots.svg";

const Ticket = (props) =>{
    return (
        <div className={styles.section}>
            <div className={styles.ticket}>
                <h2 className={styles.ticket__title}>Текущее бронирование:</h2>
                <div className={styles.ticket__form}>
                    <h3 className={styles.ticket__park}>Парковочная зона № {props.parkingZone}</h3>
                    <div className={styles.ticket__box}>
                        <p className={styles.box__place}>{props.street}, {props.сity}</p>
                        <img src={road} alt="Home"/>
                        <p className={styles.box__distance}>{props.distance} km</p>
                    </div>
                    <div className={styles.time__box}>
                        <div className={styles.time}>
                            <div className={styles.start__time}>{props.timeStart}</div>
                            <img className={styles.time__img} src={timezone} alt="время"/>
                            <div className={styles.end__time}>{props.timeEnd}</div>
                        </div>
                        <div className={styles.date__box}>
                            <div className={styles.start__date}>{props.dateStart}</div>
                            <div className={styles.end__date}>{props.dateEnd}</div>
                        </div>
                    </div>
                    <img src={dots} alt="Home"/>
                    <div className={styles.status__box}>
                        <div className={styles.current__status}>
                            Статус: <span className={styles.current__status_active}>{props.status}</span>
                        </div>
                        <div className={styles.price}>{props.price} RUB</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Ticket;