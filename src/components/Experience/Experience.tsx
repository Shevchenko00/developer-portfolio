import type { JSX } from "react";
import styles from "./Experience.module.scss";
import berlin_logo from "../../assets/berlin_logo.png";

const Experience = (): JSX.Element => {
    return (
        <>
        <h2 id={'experience'} className={styles.title}>Experience</h2>

        <section className={styles.experienceSection} >

            <div className={styles.experienceCard}>
                <img src={berlin_logo} alt="Kunst Schule Berlin" className={styles.logo} />

                <div className={styles.experienceContent}>
                    <h3 className={styles.position}>
                        Python Developer <span className={styles.period}>(10.2024 – 01.2025)</span>
                    </h3>
                    <p className={styles.company}>
                        Backend Development (Art School CRM-like Platform)
                    </p>
                    <ul className={styles.responsibilities}>
                        <li>Built RESTful APIs with Django &amp; PostgreSQL</li>
                        <li>Implemented JWT auth &amp; role-based access</li>
                        <li>Designed relational database models ensuring data consistency</li>
                        <li>Integrated with React frontend via APIs</li>
                        <li>Containerized app using Docker for deployment</li>
                        <li>Collaborated via Git &amp; code reviews</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Experience;
