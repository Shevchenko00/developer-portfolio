import { type JSX, useState } from 'react';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const HEADER_HEIGHT = 94; // укажи точную высоту твоего header

    const toggleMenu = (): void => setIsOpen(!isOpen);

    const scrollToSection = (id: string): void => {
        const section: HTMLElement | null = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect().top;
            const scrollTop = window.pageYOffset + rect - HEADER_HEIGHT;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
            setIsOpen(false); // закрываем меню на мобильных
        }
    };

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
                <li><button onClick={() => scrollToSection('about')}>About me</button></li>
                <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
                <li><button onClick={() => scrollToSection('certificate')}>Certificates</button></li>
                <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
        </header>
    );
};

export default Header;
