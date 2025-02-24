import styles from './index.module.css';
import logoIcon from '/public/icons/pageIcon.svg';
import burguerIcon from '/public/icons/burguerIcon.svg';
import { Link } from 'wouter';
import { Footer } from '../../components/footer';
import { useEffect, useRef, useState } from 'react';
import githubIcon from '/public/icons/githubIcon.svg';
import linkedinIcon from '/public/icons/linkedinIcon.svg';
import mascot from '/public/images/mascot.svg';
import mouseIcon from '/public/icons/mouseIcon.svg';
import howPlayIcon from '/public/icons/howPlayIcon.svg';
import mailIcon from '/public/icons/mailIcon.svg';
import fileIcon from '/public/icons/fileIcon.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Overflow } from '../../components/overflow';

export const Presentation = () => {
    const [sideMenu, setSideMenu] = useState(false);
    const sideMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
                setSideMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    useEffect(() => {
        const disableScroll = (event: Event) => {
            event.preventDefault();
        };

        if (sideMenu) {
            window.addEventListener("wheel", disableScroll, { passive: false });
            window.addEventListener("touchmove", disableScroll, { passive: false });
        }

        return () => {
            window.removeEventListener("wheel", disableScroll);
            window.removeEventListener("touchmove", disableScroll);
        };
    }, [sideMenu]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView();
        }
    }

    const scrollAndCloseSideMenu = (id: string) => {
        setSideMenu(false);
        scrollToSection(id);
    }

    return (
        <div className={styles.container}>
            {sideMenu && (
                <Overflow />
            )}

            <main className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <header className={styles.mainHeader}>
                        <button className={styles.menuBurguer} onClick={() => setSideMenu(!sideMenu)}>
                            <img src={burguerIcon} alt="Icone menu hamburguer" className={styles.burguerIcon} />
                        </button>

                        <img src={logoIcon} alt="Logo página Trunfer" className={styles.headerImg} />

                        <nav className={styles.menuNav}>
                            <ul className={styles.menuNavList}>
                                <li className={styles.menuNavItem}>
                                    <button className={styles.menuNavItemButton} onClick={() => scrollToSection('howToPlay')}>
                                        COMO JOGAR
                                    </button>
                                </li>
                                <li className={styles.menuNavItem}>
                                    <Link to='' className={styles.menuNavItemButton}>
                                        ASSETS
                                    </Link>
                                </li>
                                <li className={styles.menuNavItem}>
                                    <Link to='' className={styles.menuNavItemButton}>
                                        CONTATO
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.headerButtons}>
                            <Link to='/login' className={styles.headerButton}>
                                LOGIN
                            </Link>

                            <Link to='/cadaster' className={styles.headerButton}>
                                CADASTRAR
                            </Link>
                        </div>
                    </header>

                    <div className={styles.mainBody}>
                        <div className={styles.mainCard}>
                            <div className={styles.mainCardImage}>

                            </div>

                            <p className={styles.mainCardDescription}>
                                Mais conhecido como Super Trunfo, o Trunfer dobra a diversão com muito mais interação, diversão e tecnologia.
                            </p>

                            <Link to='/login' className={styles.mainCardButton}>
                                COMEÇAR JOGAR
                            </Link>

                            <img src={mascot} alt="Imagem mascote Trunfer" className={styles.mainCardIllustration} />
                        </div>

                        <div className={styles.mainDescription}>
                            <img src={logoIcon} alt="Logo página Trunfer" className={styles.mainDescriptionImg} />

                            <p className={styles.mainDescriptionText}>
                                JOGAR SUPER TRUNFO NUNCA FOI TÃO FÁCIL!
                            </p>

                            <div className={styles.mainButtons}>
                                <Link to='/cadaster' className={styles.mainButton}>
                                    CADASTRAR
                                </Link>

                                <span className={styles.mainButtonSpan}>
                                    OU
                                </span>

                                <Link to='/login' className={styles.mainButton}>
                                    LOGIN
                                </Link>
                            </div>
                        </div>

                        <div className={styles.scrollAlert}>
                            <img src={mouseIcon} alt="Icone Mouse" className={styles.scrollIcon} />
                            <span className={styles.scrollText}>
                                ROLE PARA BAIXO
                            </span>
                        </div>
                    </div>

                    <AnimatePresence>
                        {sideMenu && (
                            <motion.aside
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                exit={{ x: -1000 }}
                                transition={{ duration: 0.4, ease: 'easeIn' }}
                                className={styles.sideMenu}
                                ref={sideMenuRef}
                            >
                                <header className={styles.sideMenuHeader}>
                                    <img src={logoIcon} alt="Logo página Trunfer" className={styles.sideMenuImg} />

                                    <button className={styles.buttonCloseSideMenu} onClick={() => setSideMenu(!sideMenu)}>

                                    </button>
                                </header>

                                <nav className={styles.sideMenuNav}>
                                    <ul className={styles.sideMenuNavList}>
                                        <li className={styles.sideMenuNavItem} onClick={() => scrollAndCloseSideMenu('howToPlay')}>
                                            <img src={howPlayIcon} alt="Icone como jogar" />
                                            Como jogar
                                        </li>
                                    </ul>

                                    <ul className={styles.sideMenuNavList}>
                                        <li className={styles.sideMenuNavItem}>
                                            <img src={mailIcon} alt="Icone como jogar" />
                                            Contato
                                        </li>
                                        <li className={styles.sideMenuNavItem}>
                                            <img src={fileIcon} alt="Icone como jogar" />
                                            Assets
                                        </li>
                                    </ul>

                                    <ul className={styles.sideMenuNavList}>
                                        <li className={styles.sideMenuNavItem}>
                                            © CaioColli
                                        </li>
                                    </ul>
                                </nav>

                                <div className={styles.sideMenuLinks}>
                                    <a href="https://www.linkedin.com/in/caiocolli/" target='_blank' className={styles.link}>
                                        <button className={styles.linkButton}>
                                            <img src={linkedinIcon} alt="Icone Linkedin" className={styles.linkImg} />
                                        </button>
                                    </a>

                                    <a href="https://github.com/CaioColli" target='_blank' className={styles.link}>
                                        <button className={styles.linkButton}>
                                            <img src={githubIcon} alt="Icone GitHub" className={styles.linkImg} />
                                        </button>
                                    </a>
                                </div>

                                <img src={mascot} alt="Imagem mascote Trunfer" className={styles.sideMenuImg} />
                            </motion.aside>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <div className={styles.pageContent}>
                <section id='howToPlay' className={styles.cardsSection}>
                    <h1 className={styles.cardsTitle}>COMO JOGAR?</h1>

                    <ul className={styles.cardsList}>
                        <li className={styles.cardItem}>
                            <div className={styles.cardImage} />

                            <div className={styles.cardTexts}>
                                <h3 className={styles.cardsListItemTitle}>
                                    ESPERE SUA VEZ DE JOGAR
                                </h3>
                                <p className={styles.cardsListItemDescription}>
                                    Escolha um atributo de sua primeira carta do baralho para ser usadas durante a rodada.
                                </p>
                            </div>
                        </li>

                        <li className={styles.cardItem}>
                            <div className={styles.cardImage} />

                            <div className={styles.cardTexts}>
                                <h3 className={styles.cardsListItemTitle}>
                                    ESPERE O SISTEMA DEFINIR O VENCEDOR
                                </h3>
                                <p className={styles.cardsListItemDescription}>
                                    Após todos jogadores jogarem suas cartas o sistema vai definir a carta vencedora.
                                </p>
                            </div>
                        </li>

                        <li className={styles.cardItem}>
                            <div className={styles.cardImage} />

                            <div className={styles.cardTexts}>
                                <h3 className={styles.cardsListItemTitle}>
                                    RECEBA SUAS CARTAS
                                </h3>
                                <p className={styles.cardsListItemDescription}>
                                    Depois que o sistema de definir o vencedor será repassado as cartas ganhas, inclusive a sua para o final do baralho.
                                </p>
                            </div>
                        </li>

                        <li className={styles.cardItem}>
                            <div className={styles.cardImage} />

                            <div className={styles.cardTexts}>
                                <h3 className={styles.cardsListItemTitle}>
                                    O VENCEDOR
                                </h3>
                                <p className={styles.cardsListItemDescription}>
                                    O ultimo jogador que conter todas as cartas dos jogadores vencerá o jogo.
                                </p>
                            </div>

                        </li>
                    </ul>
                </section>

                <section className={styles.rulesSection}>
                    <h1 className={styles.rulesTittle}>
                        UM JOGO CLÁSSICO DE CARTAS MODERNIZADO!
                    </h1>

                    <div className={styles.rulesTexts}>
                        <p className={styles.rulesDescription}>
                            Super Trunfo Battle é uma versão reinventada do clássico Super Trunfo, trazendo uma dinâmica envolvente e competitiva para até 30 jogadores por partida.
                        </p>

                        <div className={styles.rulesDiv}>
                            <h2 className={styles.rulesSubTittle}>
                                Regras do Jogo
                            </h2>

                            <p className={styles.rulesDescription}>
                                Cada partida começa com um mínimo de 2 jogadores e no máximo de 30 jogadores, e as cartas são distribuídas igualmente entre todos.
                                O primeiro jogador a jogar na rodada inicial é o líder da partida. Nas rodadas seguintes, o jogador vencedor da rodada será aquele que jogara na rodada.
                                Em cada turno, o jogador da vez escolhe um atributo da sua carta para desafiar os outros jogadores.
                                Todos os jogadores revelam suas cartas e comparam o atributo escolhido. O jogador com o maior valor nesse atributo vence a rodada e recolhe as cartas dos outros participantes.
                                Os jogadores derrotados perdem as cartas usadas na rodada.
                                O jogo continua até que um único jogador tenha todas as cartas, sendo declarado o vencedor da partida.
                            </p>
                        </div>

                        <div className={styles.abautTrunferDiv}>
                            <h2 className={styles.rulesSubTittle}>
                                Sistema de Conquistas e Estatísticas
                            </h2>

                            <p className={styles.rulesDescription}>
                                Para incentivar a competição e registrar o progresso dos jogadores, o Trunfer possui:
                                Conquistas: Medalhas e títulos desbloqueáveis baseados em desempenho, como número de vitórias, sequência de vitórias, jogadas estratégicas e vitórias com cartas.
                                Log do Usuário: Cada jogador tem seu histórico registrado, incluindo o número total de partidas jogadas e quantidade de vitórias.
                                O jogo combina estratégia e sorte, garantindo partidas dinâmicas e imprevisíveis. Será que você conseguirá se tornar o campeão definitivo de Trunfer?
                            </p>
                        </div>
                    </div>

                    <div className={styles.rulesButton} onClick={scrollToTop}>
                        <button className={styles.button}>

                        </button>
                        <span className={styles.rulesButtonSpan}>
                            ROLE PARA BAIXO
                        </span>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    )
}