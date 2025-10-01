import type { FC } from "react"
import styles from "./Stack.module.scss"
import {
    SiReact,
    SiApachekafka,
    SiTypescript,
    SiDocker,
    SiPostgresql,
    SiPython,
    SiTelegram,
    SiMysql,
    SiDjango,
    SiFigma,
    SiMongodb,
    SiWebpack,
    SiVite,
    SiHtml5,
    SiCss3
} from "react-icons/si"

const stackItems = [
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Aiogram", icon: <SiTelegram /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
]

const Stack: FC = () => {
    return (

        <section id="stack" className={styles.stack}>

            <h1 className={styles.title}>Technical Stack</h1>
            <div className={styles.container}>
                {stackItems.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.icon}>{item.icon}</div>
                        <p className={styles.name}>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Stack
