import type {JSX} from "react";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import TShop from "../../assets/TShop.png";
import styles from './Partfolio.module.scss'
const Portfolio = (): JSX.Element => {
    return (
        <>
            <h1 className={styles.partfolio_head}>Portfolio Projects</h1>
            <div className={styles.partfolio_container}>
            <ProjectCard image={TShop} title={'Telegram E-Commerce bot'}
                         description={'An open-source e-commerce platform built with Python'}
                         features={[
                             'Easy product management',
                             'Order tracking & shopping cart',
                             'User accounts & profiles',
                             'Real-time updates',
                             'Admin dashboard'
                         ]}          />
                <ProjectCard image={TShop} title={'Django + React booking system'}
                             description={'A modern web app for renting and managing apartments'}
                             features={[
                                 'Fast and easy apartment search with filters',
                                 'Detailed listings with photos, maps, and contacts',
                                 'Built-in messaging between tenants and landlords',
                                 'Dashboard for landlords to manage properties',
                                 'Secure, responsive, and user-friendly'
                             ]}          />
            </div>
        </>
    )

}

export default Portfolio;