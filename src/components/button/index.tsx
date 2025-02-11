import styles from './index.module.css'

interface ButtonProps {
    text: string;
    disabled: boolean
}

export const Button = ({ text, disabled }: ButtonProps) => {
    const buttonClasses = disabled
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