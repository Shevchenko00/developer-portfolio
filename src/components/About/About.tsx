import type { JSX } from "react";
import styles from './About.module.scss'
import Button from "../Button/Button.tsx";


const About = (): JSX.Element => {
    return (
        <>
            <div className={styles.about_container}>
                <h1 className={styles.about_head}>I’m Full-Stack Developer</h1>
                <p className={styles.about_paragraph}>I am a full-stack developer specializing in Django + React with SQL databases, with a strong backend-first focus. I build various types of bots (e-commerce, news, etc.), work on automation projects, and deliver scalable web applications.<br/>
                    Currently based in Saxony, Germany, I am open to both on-site opportunities within the region and remote positions across Germany. I am flexible with different formats of work — whether it’s a one-off project, full-time employment, or freelance collaboration.</p>
                <Button label={'Contact'}/>

            </div>
        </>
    )
}


export default About;