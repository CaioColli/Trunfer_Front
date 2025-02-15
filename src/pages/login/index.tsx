import { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import styles from './index.module.css';
import { Link, useLocation } from 'wouter';
import { BoxOfInputs } from '../../components/inputBox';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../services/baseAPI';
import { AxiosError } from 'axios';
import { AlertMessage } from '../../components/alertMessage';
import { setCookie } from '../../utils/cookie';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string[]>([]);

    const [buttonVisibility, setIsButtonVisibility] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [, setLocation] = useLocation();

    const queryClient = useQueryClient();

    const handleVisiblePassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    const mutation = useMutation({
        mutationFn: (login: { user_Email: string; user_Password: string }) =>
            api.post('/user/login', login),
        onSuccess: (sucess) => {
            const token = sucess.data.token;
            setCookie('token', token, 24);

            queryClient.setQueryData(['user'], sucess.data);

            setLocation('/home');
        },
        onError: (error: AxiosError<{ errors: string[] }>) => {
            setAlertVisibility(true);

            if (error.response?.data?.errors) {
                setAlertMessage(error.response.data.errors);
            } else {
                setAlertMessage(['Erro desconhecido ao fazer login.']);
            }
        }
    });

    useEffect(() => {
        if (email !== '' && password !== '') {
            setIsButtonVisibility(true);
        } else {
            setIsButtonVisibility(false);
        }

        setAlertVisibility(false);
    }, [email, password])

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            user_Email: email,
            user_Password: password
        }

        mutation.mutate(user);
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <div className={styles.passwordContainer}>
                        <Input
                            placeholder="Senha"
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        {!passwordVisible
                            ?
                            <img src="/public/icons/closedEye.svg" alt="" className={styles.eyePasswordIcon} onClick={() => handleVisiblePassword()} />
                            :
                            <img src="/public/icons/openEye.svg" alt="" className={styles.eyePasswordIcon} onClick={() => handleVisiblePassword()} />
                        }
                    </div>

                    {alertVisibility && (
                        <AlertMessage
                            message={alertMessage}
                        />
                    )}

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Entrar"
                            available={buttonVisibility}
                        />

                        <Link to="/" className={styles.forgotPasswordButton}>
                            Esqueci minha senha
                        </Link>

                        <Link to="/cadaster" className={styles.creatAccountButton}>
                            Criar conta
                        </Link>
                    </div>

                </BoxOfInputs>
            </form>
        </section>
    )
}