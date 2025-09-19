import styles from './Button.module.scss'

type ButtonProps = {
    label: string;
};

const Button = ({ label }: ButtonProps) => {
    return (
        <button className={styles.btn}>
            {label}
        </button>
    );
};


export default Button;