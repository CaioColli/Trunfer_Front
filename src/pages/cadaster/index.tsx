import { useState } from 'react';
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import styles from './index.module.css'
import { Link } from 'wouter';

export const Cadaster = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados enviados', name, email, password, confirmPassword);
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
                            placeholder="Nome"
                            type='text'
                            onChange={(event) => setName(event.target.value)}
                        />

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

                        <Input
                            placeholder="Confirme sua senha"
                            type='password'
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Cadastrar"
                            click={() => { }}
                        />

                        <Link to="/" className={styles.backToLogin}>
                            Voltar ao login
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}