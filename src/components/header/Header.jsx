
import styles from "/src/components/header/Header.module.css";
import Hamburger from "hamburger-react";
import person from "../../assets/person.svg";
import {useState} from "react";

const Header = (props) => {
    const [isOpen, setOpen] = useState(false)
    console.log(props)
    return (


                <div className={styles.form__header}>
                    <div className={styles.header__wrap}>
                        <Hamburger toggled={isOpen} toggle={setOpen}/>

                        <h1 className={styles.form__title}>{props.title}</h1>
                        <div className={styles.person__box}>
                            <img src={person} alt="Person"/>
                        </div>
                    </div>
                    <p className={styles.form__hello}>{props.user}</p>


            </div>
    );
};

export default Header;