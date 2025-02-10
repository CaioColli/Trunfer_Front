import { useState } from 'react';
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import styles from './index.module.css'
import { Link } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../services/baseAPI';
import { Alert } from '../../components/alert';
import { BoxOfInputs } from '../../components/inputBox';

export const Cadaster = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const mutation = useMutation({
        mutationFn: (newUser: { user_Name: string; user_Email: string; user_Password: string }) =>
            api.post('/user/cadaster', newUser),
        onSuccess: (response) => {
            console.log(response.data.message);
            // Você pode redirecionar ou mostrar uma mensagem de sucesso aqui
        },
        onError: (error) => {
            console.error('Erro ao cadastrar usuário', error);
            // Trate o erro, exibindo uma mensagem para o usuário, por exemplo
        }
    });

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Senhas diferentes");
            return;
        }

        const newUser = {
            user_Name: name,
            user_Email: email,
            user_Password: password
        };

        console.log('Enviando dados:', newUser);
        mutation.mutate(newUser);
    }

    return (
        <section className={styles.section}>
            {/* <Alert /> */}
            <form className={styles.form} onSubmit={submitForm}>
                <BoxOfInputs
                    text='CADASTRO'
                >
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

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Cadastrar"
                            click={() => { }}
                            isActive={false}
                            disabled={true}
                        />

                        <Link to="/" className={styles.backToLogin}>
                            Voltar ao login
                        </Link>
                    </div>
                </BoxOfInputs>

            </form>
        </section>
    )
}