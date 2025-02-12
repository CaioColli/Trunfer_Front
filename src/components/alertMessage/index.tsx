import styles from './index.module.css';

interface AlertMessageProps {
    message: string[];
}

export const AlertMessage = ({ message }: AlertMessageProps) => {
    return (
        <div className={styles.alertContainer}>
            {message.map((message, index) => (
                <p key={index} className={styles.alert}>{message}</p>
            ))}
        </div>
    )
}