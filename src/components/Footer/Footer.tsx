import type {JSX} from "react";
import styles from './Footer.module.scss'
import AnimatedSection from "../AnimateWrapper/AnimateWrapper.tsx";
const Footer = (): JSX.Element => {
    const year: number = new Date().getFullYear();

    return (
        <AnimatedSection direction={'right'} once={false}>
        <footer className={styles.footer_container}>
            <p className={styles.footer_text}>
                © {year} Oleksandr Shevchenko. All rights reserved.
            </p>
        </footer>
        </AnimatedSection>
    );
};

export default Footer;


