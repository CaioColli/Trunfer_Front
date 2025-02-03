import styles from './index.module.css'

interface InputProps {
    placeholder: string
    type: 'text' | 'password' | 'email'
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, type, onChange }: InputProps) => {
    return (
        <div className={styles.inputDiv}>
            <label className={styles.label}>
                {placeholder}
            </label>
            
            <input type={type}
                className={styles.input}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}