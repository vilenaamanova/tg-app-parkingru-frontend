
import styles from './MainPage.module.css'

import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Card from "../../components/card/Card.jsx";
import Ticket from "../../components/ticket/Ticket.jsx";
import Modal from "../../components/modal/Modal.jsx";
import {useState} from "react";
const MainPage = () => {

    return (

        <div className={styles.form}>
            <Header title='Главная' user="Привет Анатолий"/>
            <Ticket status='Active' price='500' dateStart='27 июня, 2024' dateEnd="27 июня, 2024" timeStart="10:00" timeEnd="13:00" distance="3.3" parkingZone="7814" street="Кронверский округ" сity="Санкт-Петербург" />

            <Card parkingZone="7816" data="23 июня, 2024" startTime="11:23" endTime="16:23" distance="3.3" price="500"/>
            <Card parkingZone="7834" data="17 июня, 2024" startTime="19:06" endTime="21:30" distance="21" price="200"/>

            {/*<Modal  title='7834' street="Кронверский округ" сity="Санкт-Петербург" distance="321" count='115'/>*/}

            <Footer />


        </div>
    );
};

export default MainPage;