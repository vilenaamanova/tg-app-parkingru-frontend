import styles from './WalletPage.module.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Link} from "react-router-dom";
const WalletPage = () => {
    return(
        <div className={styles.form}>
            <Header title='Кошелек' />
                <div className={styles.card}>
                    <p className={styles.card__info}>Мой баланс</p>
                    <div className={styles.price}>300 Rub</div>

                </div>
            <Link to='/addBalance' className={styles.button}>Пополнить</Link>

            <Footer/>
        </div>
    )
}
export default WalletPage;