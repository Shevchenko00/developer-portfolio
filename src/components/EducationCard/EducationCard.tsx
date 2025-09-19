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
            <img src={logo} alt={title} className={styles.logo} />
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.skills}>
                    <span>SKILLS:</span>
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
