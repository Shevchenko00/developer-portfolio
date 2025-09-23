import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>

            <div
                className={`${styles.burger} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <span />
                <span />
                <span />
            </div>

            <ul className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
                <li><a href="#about">About me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certificate">Certificates</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;
