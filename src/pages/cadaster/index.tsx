import { useEffect, useState } from 'react';
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

    const [isButtonActive, setIsButtonActive] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (name && email && password && confirmPassword !== '') {
            setIsButtonActive(true);
        }
    }, [name, email, password, confirmPassword]);

    const mutation = useMutation({
        mutationFn: (newUser: { user_Name: string; user_Email: string; user_Password: string }) =>
            api.post('/user/cadaster', newUser),
        onSuccess: () => {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 4000);

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        },
        onError: (error) => {
            console.error('Erro ao cadastrar usuário', error);
            // Trate o erro, exibindo uma mensagem para o usuário, por exemplo
        }
    });

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            // Fazer um texto logo abaixo do campo confirme sua senha para mostrar o erro
            alert('As senhas precisam ser iguais');
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
            {showAlert && (
                <Alert
                    alertType='success'
                    message='Cadastro realizado com sucesso'
                    onClose={() => { setShowAlert(false) }}
                />
            )}

            <form className={styles.form} onSubmit={submitForm}>
                <BoxOfInputs
                    text='CADASTRO'
                >
                    <Input
                        placeholder="Nome"
                        type='text'
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />

                    <Input
                        placeholder="Email"
                        type='email'
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />

                    <Input
                        placeholder="Senha"
                        type='password'
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />

                    <Input
                        placeholder="Confirme sua senha"
                        type='password'
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                    />

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Cadastrar"
                            disabled={isButtonActive}
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