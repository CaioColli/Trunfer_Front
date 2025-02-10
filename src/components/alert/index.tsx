import { useEffect } from 'react';
import styles from './index.module.css';

interface AlertProps {
    // alertType: 'success' | 'error' | 'warning';
    alertType: string;
    message: string;
    onClose: () => void;
}

export const Alert = ({ alertType, message, onClose }: AlertProps) => {
    
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`${styles.bodyAlert} ${styles[alertType]}`}
        >
            <h1>{message}</h1>
        </div>
    )
}