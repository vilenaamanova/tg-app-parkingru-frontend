import Header from "../../components/header/Header.jsx";
import styles from './MapPage.module.css'
import Footer from "../../components/footer/Footer.jsx";
import YandexMap from "../../components/yandexMap/YandexMap.jsx";
import {useState} from "react";
import Modal from "../../components/modal/Modal.jsx";


const MapPage = () =>{
    const [isModalOpen, setModalOpen] = useState(true);
    const handleClose = () => {
        setModalOpen(false);
    };
    const handleOpen=() =>{
        setModalOpen(true);
    }
    return(
        <div className={styles.form}>
            <Header title="Карта"/>
            <YandexMap/>
            {isModalOpen && <Modal onClose={handleClose}/>}
            <button onClick={handleOpen}>Забронировать</button>
            <Footer/>
        </div>

    )
}
export default MapPage;