import type {JSX} from "react";
import styles from './Contact.module.scss'
const Contact = (): JSX.Element => {
    return (
        <div id={'contact'} className={styles.contact_container}>
            <h1 className={styles.contact_head}>Contact</h1>
            <p className={styles.contact_text}>
                If you are seeking high-quality software development, reliable collaboration, or tailored solutions for your project, please do not hesitate to get in touch. I am committed to delivering professional results and turning your ideas into fully functional, scalable, and efficient solutions. I look forward to discussing how we can work together to achieve your goals."
                <a href="mailto:shevchenko.oleksandr0209@gmail.com" className={styles.contact_button}>
                    Email Me
                </a>
            </p>
        </div>
    );
}

export default Contact