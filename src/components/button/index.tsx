import styles from './index.module.css'

interface ButtonProps {
    text: string;
    click: () => void
}

export const Button = ({ text, click }: ButtonProps) => {
    return (
        <button
            onClick={click}
            className={styles.button}
        >
            {text}
        </button>
    )
}