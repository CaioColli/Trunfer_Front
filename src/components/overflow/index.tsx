import styles from './index.module.css'
import { motion } from 'framer-motion'

export const Overflow = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -1000 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className={styles.overflow}
        />
    )
}