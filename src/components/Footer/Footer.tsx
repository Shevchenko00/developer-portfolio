import type {JSX} from "react";
import styles from './Footer.module.scss'
const Footer = (): JSX.Element => {
    const year: number = new Date().getFullYear();

    return (
        <footer className={styles.footer_container}>
            <p className={styles.footer_text}>
                © {year} Oleksandr Shevchenko. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;


