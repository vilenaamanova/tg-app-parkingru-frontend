import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Card from "../../components/card/Card.jsx";
import styles from "./HistoryPage.module.css"
const HistoryPage = () => {
    return (
        <div className={styles.form}>
            <Header/>
            <Card parkingZone="7816" data="23 июня, 2024" startTime="11:23" endTime="16:23" distance="3.3" price="500"/>
            <Card parkingZone="7834" data="17 июня, 2024" startTime="19:06" endTime="21:30" distance="21" price="200"/>

            <Footer/>

        </div>
    );
};

export default HistoryPage;