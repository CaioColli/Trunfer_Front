import styles from './index.module.css'

interface ButtonProps {
    text: string;
    click: () => void;
    isActive: boolean;
    disabled: boolean
}

export const Button = ({ text, click, isActive = false, disabled }: ButtonProps) => {
    return (
        <button
            onClick={click}
            className={`${styles.button} ${isActive ? styles.activeButton : ''}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}