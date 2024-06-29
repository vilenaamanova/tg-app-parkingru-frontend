// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles  from './HelloPage.module.css'
import Bg from '/src/assets/Group 92.svg'
import {Link} from "react-router-dom";
const HelloPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={Bg}/>
                </div>

                <div className={styles.form}>

                    <div className={styles.card}>
                        <h3 className={styles.card__title}>
                            Добро пожаловать в
                            Parking.ru
                        </h3>
                        <p className={styles.card__info}>
                            Мы собрали для Вас все парковки России в одном мини-приложении
                        </p>
                        <Link to='/mainpage' className={styles.card__button}>
                            <p className={styles.button__text}>Get Started</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HelloPage;