import styles from './index.module.css'

interface PageContainerProps {
    children: React.ReactNode
    // React.ReactNode -> Representa qualquer coisa que o React pode renderizar
}

export const PageContainer = ({children} : PageContainerProps) => {
    return (
        <div className={styles.pageContainer}>
            {children}
        </div>
    )
}