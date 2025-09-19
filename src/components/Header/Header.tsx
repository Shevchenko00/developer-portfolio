import type {JSX} from "react";
import styles from './Header.module.scss';
const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <ul>
                <li><a href="#about">About me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
        </header>
    );
}

export default Header;