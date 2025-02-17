import styles from './index.module.css';
import logoIcon from '/public/icons/pageIcon.svg';
import burguerIcon from '/public/icons/burguerIcon.svg';
import { Link } from 'wouter';

export const Presentation = () => {
    return (
        <div className={styles.presentation}>
            <header className={styles.header}>
                <button className={styles.menuBurguer}>
                    <img src={burguerIcon} alt="Icone menu hamburguer" className={styles.burguerIcon} />
                </button>

                <img src={logoIcon} alt="Logo página Trunfer" className={styles.logoIcon} />

                <nav className={styles.menu}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <a href="" className={styles.menuItemAnchor}>
                                COMO JOGAR
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="" className={styles.menuItemAnchor}>
                                ASSETS
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="" className={styles.menuItemAnchor}>
                                CONTATO
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <h1 className={styles.mainTitle}>
                        JOGAR SUPER TRUNFO NUNCA FOI TÃO FÁCIL
                    </h1>
                    <p className={styles.mainDescription}>
                        Mais conhecido como Super Trunfo, o Trunfe dobra a diversão com muito mais interação, diversão e tecnologia.
                    </p>

                    <div className={styles.mainButtons}>
                        <Link to='/cadaster' className={styles.mainButtonsAnchor}>
                            <button className={styles.mainButtonsAnchorButton}>
                                CADASTRAR
                            </button>
                        </Link>

                        <span className={styles.mainButtonsSpan}>
                            Ou
                        </span>

                        <Link to='/login' className={styles.mainButtonsAnchor}>
                            <button className={styles.mainButtonsAnchorButton}>
                                LOGIN
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <section className={styles.sectionCards}>
                <h1 className={styles.cardsTitle}>COMO JOGAR?</h1>

                <ul className={styles.cardsList}>
                    <li className={styles.cardItem}>
                        <div className={styles.cardImage} />

                        <div className={styles.cardTexts}>
                            <h2 className={styles.cardsListItemTitle}>
                                ESPERE SUA VEZ DE JOGAR
                            </h2>
                            <p className={styles.cardsListItemDescription}>
                                Escolha um atributo de sua primeira carta do baralho para ser usadas durante a rodada.
                            </p>
                        </div>
                    </li>

                    <li className={styles.cardItem}>
                        <div className={styles.cardImage} />

                        <div className={styles.cardTexts}>
                            <h2 className={styles.cardsListItemTitle}>
                                ESPERE O SISTEMA DEFINIR O VENCEDOR
                            </h2>
                            <p className={styles.cardsListItemDescription}>
                                Após todos jogadores jogarem suas cartas o sistema vai definir a carta vencedora.
                            </p>
                        </div>
                    </li>

                    <li className={styles.cardItem}>
                        <div className={styles.cardImage} />

                        <div className={styles.cardTexts}>
                            <h2 className={styles.cardsListItemTitle}>
                                RECEBA SUAS CARTAS
                            </h2>
                            <p className={styles.cardsListItemDescription}>
                                Depois que o sistema de definir o vencedor será repassado as cartas ganhas, inclusive a sua para o final do baralho.
                            </p>
                        </div>
                    </li>

                    <li className={styles.cardItem}>
                        <div className={styles.cardImage} />

                        <div className={styles.cardTexts}>
                            <h2 className={styles.cardsListItemTitle}>
                                O VENCEDOR
                            </h2>
                            <p className={styles.cardsListItemDescription}>
                                O ultimo jogador que conter todas as cartas dos jogadores vencerá o jogo.
                            </p>
                        </div>

                    </li>
                </ul>
            </section>
        </div>
    )
}