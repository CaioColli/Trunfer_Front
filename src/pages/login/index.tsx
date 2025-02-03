import { useState } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import styles from './index.module.css';
import { Link } from 'wouter';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados enviados', email, password);
    }

    return (
        <section className={styles.section}>
            <div className={styles.leftSideDiv}>
                <img src="../../../public/images/logoImage.svg" alt="Imagem decorativa super trunfo" className={styles.sideImage} />
            </div>

            <div className={styles.rightSideDiv}>
                <form className={styles.form} onSubmit={submitForm}>
                    <div className={styles.inputsDiv}>
                        <Input
                            placeholder="Email"
                            type='email'
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <Input
                            placeholder="Senha"
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Entrar"
                            click={() => { }}
                        />

                        <button className={styles.forgotPasswordButton}>
                            Esqueci minha senha
                        </button>

                        <Link to="/cadaster" className={styles.creatAccountButton}>
                            Criar conta
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}