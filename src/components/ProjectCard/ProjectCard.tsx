import React from "react";
import styles from "./ProjectCard.module.scss";

type CardProps = {
    image: string;
    title: string;
    description: string;
    features: string[];
};

const ProjectCard: React.FC<CardProps> = ({ image, title, description, features}) => {
    return (

        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <ul className={styles.features}>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className={styles.project_button}>GitHub</button>
            </div>
        </div>
    );
};

export default ProjectCard;
