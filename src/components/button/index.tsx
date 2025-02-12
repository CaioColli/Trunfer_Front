import styles from './index.module.css'

interface ButtonProps {
    text: string;
    available: boolean
}

export const Button = ({ text, available }: ButtonProps) => {
    const buttonClasses = available
        ? `${styles.button} ${styles.activeButton}`
        : styles.button

    return (
        <button
            className={buttonClasses}
        >
            {text}
        </button>
    )
}