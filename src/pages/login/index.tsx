import { useState } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import styles from './index.module.css';
import { Link } from 'wouter';
import { BoxOfInputs } from '../../components/inputBox';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados enviados', email, password);
    }

    return (
        <section className={styles.section}>
            <form className={styles.form} onSubmit={submitForm}>
                <BoxOfInputs
                    text="LOGIN"
                >
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

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Entrar"
                            click={() => { }}
                            isActive={false}
                            disabled={true}
                        />

                        <button className={styles.forgotPasswordButton}>
                            Esqueci minha senha
                        </button>

                        <Link to="/cadaster" className={styles.creatAccountButton}>
                            Criar conta
                        </Link>
                    </div>

                </BoxOfInputs>
            </form>
        </section>
    )
}