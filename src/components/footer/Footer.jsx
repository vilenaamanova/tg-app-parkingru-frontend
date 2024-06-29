
import home from "../../assets/home.svg";
import mapa from "../../assets/mapa.svg";
import wallet from "../../assets/wallet.svg";
import time from "../../assets/time.svg";
import styles from '/src/components/footer/Footer.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";


const Footer = () =>{
    const [show, setShow] = useState(false);
    return (
        <div className={styles.footer}>
            <ul className={styles.footer__list}>
                <Link to='/mainpage' className={styles.list__item}>
                    <img src={home} alt="Person"/>
                </Link>
                <Link to='/map' className={styles.list__item}>
                    <img src={mapa} alt="Person"/>
                </Link>
                <Link to="/wallet" className={styles.list__item} onClick={() => setShow(!show)}>
                    <img src={wallet} alt="Person"/>
                </Link>
                {/*<CSSTransition in={show} timeout={300}  classNames={styles.my__node}>*/}

                {/*</CSSTransition>*/}
                <Link to='/auto' className={styles.list__item}>
                    <img src={time} alt="Person"/>
                </Link>
            </ul>
        </div>
    )
}
export default Footer;