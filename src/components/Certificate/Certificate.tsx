import type {JSX} from "react";
import styles from './Certificatee.module.scss'
import ich_logo from "../../assets/ich_logo.png";
import meta_logo from "../../assets/meta_logo.png";
import michigan_logo from "../../assets/michigan_logo.png";


import EducationCard from "../EducationCard/EducationCard.tsx";
import AnimatedSection from "../AnimateWrapper/AnimateWrapper.tsx";
const Certificate = ():JSX.Element => {
    return (
        <>
            <AnimatedSection direction={'left'} once={false}>
            <h1 id={'certificate'} className={styles.education_head}>Education & Certificates</h1>
            <section className={styles.educationSection}>


            <h3>Further education</h3>
            <div className={styles.cardsContainer}>
                <EducationCard
                    logo={ich_logo}
                    title="Python Developer"
                    skills={["Python", "Django", "Flask", "MySQL", "Docker", "MongoDB", "Linux System Administration"]}
                />
            </div>

            <h3>Certificates</h3>
            <div className={styles.cardsContainer}>
                <EducationCard
                    logo={michigan_logo}
                    title="Introduction to HTML5"
                    skills={["HTML5"]}
                />
                <EducationCard
                    logo={michigan_logo}
                    title="Introduction to CSS3"
                    skills={["CSS3"]}
                />
                <EducationCard
                    logo={meta_logo}
                    title="Specialization Meta Front-End Developer"
                    skills={["HTML5", "CSS3", "JavaScript", "React", "Figma", "Jest", "Webpack", "JSON"]}
                />
            </div>
        </section>
            </AnimatedSection>
        </>
    );
};

export default Certificate