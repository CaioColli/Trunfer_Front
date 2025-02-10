import styles from './index.module.css'

interface ButtonProps {
    text: string;
    disabled: boolean
}

export const Button = ({ text, disabled }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${disabled ? styles.activeButton : ''}`}
        >
            {text}
        </button>
    )
}