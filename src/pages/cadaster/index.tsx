import styles from './index.module.css'
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Link, useLocation } from 'wouter';
import { api } from '../../services/baseAPI';
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Alert } from '../../components/alert';
import { BoxOfInputs } from '../../components/inputBox';

export const Cadaster = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [, setLocation] = useLocation();

    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState<string[]>([]);

    const [buttonVisibility, setIsButtonVisibility] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            setIsButtonVisibility(true);
        } else {
            setIsButtonVisibility(false);
        }

        setWarning(false);
    }, [name, email, password, confirmPassword]);

    const mutation = useMutation({
        mutationFn: (newUser: { user_Name: string; user_Email: string; user_Password: string }) =>
            api.post('/user/cadaster', newUser),
        onSuccess: () => {
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
                setLocation('/');
              }, 3000);

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        },
        onError: (error: AxiosError<{ errors: string[] }>) => {
            setWarning(true);
            setTimeout(() => setWarning(false), 8000);

            if (error.response?.data?.errors) {
                setWarningMessage(error.response.data.errors);
            } else {
                setWarningMessage(['Erro desconhecido ao cadastrar usuário.']);
            }
        }
    });

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setWarning(true);
            setTimeout(() => setWarning(false), 8000);
            setWarningMessage(['As senhas devem ser iguais.']);
            return;
        }

        const newUser = {
            user_Name: name,
            user_Email: email,
            user_Password: password
        };

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

            <BoxOfInputs
                text='CADASTRO'
            >
                <form className={styles.form} onSubmit={submitForm}>
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

                    {warning && (
                        <div className={styles.warnings}>
                            {warningMessage.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        </div>
                    )}

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Cadastrar"
                            disabled={buttonVisibility}
                        />

                        <Link to="/" className={styles.backToLogin}>
                            Voltar ao login
                        </Link>
                    </div>
                </form>
            </BoxOfInputs>
        </section>
    )
}