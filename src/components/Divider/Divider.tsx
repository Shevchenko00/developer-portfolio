import type {JSX} from "react";
import styles from './Divider.module.scss'
const Divider = (): JSX.Element => {
    return (
        <div className={styles.divider}></div>
    )
}

export default Divider;