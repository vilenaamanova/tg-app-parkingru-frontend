import styles from './Payment.module.css'
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
const PaymentPage = () => {
    return(
        <div className={styles.form}>
            <Header/>
                <div className={styles.section}>
                    <h2 className={styles.section__title}>Парковочная Зона</h2>
                    <p className={styles.section__text}>Кронверксий округ, Санкт-Петербург</p>
                </div>
            <Footer/>
        </div>
    )
}
export default PaymentPage;