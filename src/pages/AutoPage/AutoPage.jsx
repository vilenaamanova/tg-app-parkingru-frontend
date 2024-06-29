import styles from './AutoPage.module.css'
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import AutoCard from "../../components/autocard/AutoCard.jsx";




const AutoPage = () => {
    return (
        <div className={styles.form}>
            <Header title="Авто"/>
            <div className={styles.cup}>
                <p className={styles.cup__title}>Мои Авто</p>
                <a className={styles.cup__link}>+ Добавить авто</a>
            </div>
            <AutoCard car='Mercedes G 63'  number='A 888 AA 777'/>
            <AutoCard car='Mercedes G 63'  number='O 888 BB 777'/>
            <AutoCard car='Mercedes G 63'  number='A 888 AA 777'/>
            <AutoCard car='Mercedes G 63'  number='A 888 AA 777'/>
            <AutoCard car='Mercedes G 63'  number='A 888 AA 777'/>


            <Footer/>
        </div>
    );
};

export default AutoPage;