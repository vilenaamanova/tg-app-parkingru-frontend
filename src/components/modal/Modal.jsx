
import styles from '/src/components/modal/modal.module.css'
import {useState} from "react";

// import distance from '/src/assets/road.svg'
// import cars from '/src/assets/cars.svg'

const Modal = ({ onClose }) => {
    const [date, setDate] = useState('27 июня, четверг');
    const [time, setTime] = useState('3 часа');
    const [car, setCar] = useState('E 712 AB 779, Tesla');
    return (
        // <div className={styles.container}>
        //     <div className={styles.card}>
        //         <div className={styles.card__title}>Парковочная зона # {props.title}</div>
        //         <div className={styles.card_ghost}>{props.street} {props.сity}</div>
        //         <div className={styles.card__list}>
        //             <div className={styles.distance}>
        //                 <img className={styles.image} src={distance} alt="distance"/>
        //                 <p className={styles.distance__text}>{props.distance} M</p>
        //             </div>
        //             <div className={styles.distance}>
        //                 <img   src={cars} alt="cars"/>
        //                 <p className={styles.distance__text}>Мест {props.count}</p>
        //             </div>
        //         </div>
        //
        //     </div>
        //
        //
        // </div>


        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Парковочная зона №7814</h2>
                <p>Кронверкский округ, Санкт-Петербург</p>
                <p>321 м</p>
                <p>Мест: 115</p>
                <button className={styles.closeButton} onClick={onClose}>×</button>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <label>Дата</label>
                    <select value={date} onChange={(e) => setDate(e.target.value)} className={styles.select}>
                        <option value="27 июня, четверг">27 июня, четверг</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className={styles.row}>
                    <label>Время парковки</label>
                    <select value={time} onChange={(e) => setTime(e.target.value)} className={styles.select}>
                        <option value="3 часа">3 часа</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className={styles.row}>
                    <label>Мои авто</label>
                    <select value={car} onChange={(e) => setCar(e.target.value)} className={styles.select}>
                        <option value="E 712 AB 779, Tesla">E 712 AB 779, Tesla</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className={styles.row}>
                    <label>Новый автомобиль</label>
                    <input type="text" placeholder="Номер ТС" className={styles.input}/>
                    <input type="text" placeholder="Тип ТС" className={styles.input}/>
                </div>
                <button className={styles.button}>Оплатить</button>
            </div>
        </div>
    );
};

export default Modal;