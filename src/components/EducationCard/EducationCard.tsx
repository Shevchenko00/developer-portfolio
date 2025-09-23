import styles from "./Education.module.scss";
import React from "react";

type CardProps = {
    logo: string;
    title: string;
    skills: string[];
};

const EducationCard: React.FC<CardProps> = ({ logo, title, skills }) => {
    const mid = Math.ceil(skills.length / 2);
    const col1 = skills.slice(0, mid);
    const col2 = skills.slice(mid);

    return (
        <div className={styles.card}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt={title} className={styles.logo} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.skills}>
                    <span className={styles.label}>Skills:</span>
                    <div className={styles.skillsGrid}>
                        <ul>
                            {col1.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                        <ul>
                            {col2.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
