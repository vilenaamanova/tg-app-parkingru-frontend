import styles from "./AddBalance.module.css"
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {useEffect, useState} from "react";

const paymentMethods = [
    'Credit Card',
    'Debit Card',
    'PayPal',
    'Bank Transfer',
    'Cryptocurrency'
];
const AddBalancePage = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelectedMethod = (method) => {
        setSelectedMethod(method);
        setIsOpen(false);
    }
    return(
        <div className={styles.form}>
            <Header title='Пополнение' />
            <div className={styles.card}>
                <h2 className={styles.card__title}>Пополнение счета</h2>
                <div className={styles.card__block}>
                    <p className={styles.block__title}>Сумма пополнения</p>
                    <input type='text' className={styles.block__input}/>
                </div>
                <div className={styles.card__block}>
                    <p className={styles.block__title}>Способ оплаты</p>
                    <button className={styles.dropdown__button} onClick={toggleDropdown}>
                        {selectedMethod || "Способ оплаты"}
                        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}/>
                    </button>
                    {isOpen && (
                        <ul className={styles.dropdown__menu}>
                            {paymentMethods.map((method, index) => (
                                <li key={index} onClick={() => handleSelectedMethod(method)}
                                    className={styles.dropdown__item}>{method}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.card__block}>
                    <p className={styles.block__title}>Номер телефона</p>
                    <input type='text' className={styles.block__input} placeholder={89999999999}/>
                </div>
                <div className={styles.card__button}>
                    <button className={styles.button} type={"submit"} >Пополнить</button>
                </div>

            </div>

            <Footer/>

        </div>

    )
}
export default AddBalancePage;