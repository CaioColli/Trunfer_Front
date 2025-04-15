import styles from './index.module.css';

interface BoxProps {
    children: React.ReactNode;
    text: string;
}

export const InputContainer = ({ children, text }: BoxProps) => {
    return (
        <div className={styles.box}>
            <header className={styles.boxHeader}>
                {text}
            </header>
            {children}
        </div>
    )
}