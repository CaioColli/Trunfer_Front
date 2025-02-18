import logoIcon from '/public/icons/pageIcon.svg';
import githubIcon from '/public/icons/githubIcon.svg';
import linkedinIcon from '/public/icons/linkedinIcon.svg';
import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logoIcon} alt="Logo página Trunfer" className={styles.logoIcon} />

            <span className={styles.copyright}>
                ©CaioColli
            </span>

            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/caiocolli/" className={styles.link} target='_blank'>
                    <img src={linkedinIcon} alt="Icone Linkedin" className={styles.linkImaga} />
                </a>

                <a href="https://github.com/CaioColli" className={styles.link} target='_blank'>
                    <img src={githubIcon} alt="Icone GitHub" className={styles.linkImaga} />
                </a>
            </div>
        </footer>
    )
}