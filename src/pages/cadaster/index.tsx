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
import { AlertMessage } from '../../components/alertMessage';

export const Cadaster = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordValidationVisibility, setPasswordValidationVisibility] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasLetter, setHasLetter] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);

    const [differentPasswordVisibility, setDifferentPasswordVisibility] = useState(false);

    const [, setLocation] = useLocation();

    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string[]>([]);

    const [buttonVisibility, setIsButtonVisibility] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleVisiblePassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);

        const checkSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        setHasSpecialChar(checkSpecialChar.test(value));

        const checkLetter = /[a-zA-Z]/;
        setHasLetter(checkLetter.test(value));

        setPasswordLength(value.length >= 6);
    }

    const handleInputConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);

        if (confirmPassword !== password) {
            setDifferentPasswordVisibility(true);
        } else {
            setDifferentPasswordVisibility(false);
        }
    }

    useEffect(() => {
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            setIsButtonVisibility(true);
        } else {
            setIsButtonVisibility(false);
        }

        if (password !== '') {
            setPasswordValidationVisibility(true);
        } else {
            setPasswordValidationVisibility(false);
        }

        setAlertVisibility(false);
    }, [name, email, password, confirmPassword]);

    useEffect(() => {
        if (confirmPassword !== password) {
            setDifferentPasswordVisibility(true);
            setIsButtonVisibility(false);
        } else {
            setDifferentPasswordVisibility(false);
        }
    }, [confirmPassword]);

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
            console.log(error);
            setAlertVisibility(true);

            if (error.response?.data?.errors) {
                setAlertMessage(error.response.data.errors);
            } else {
                setAlertMessage(['Erro desconhecido ao cadastrar usuário.']);
            }
        }
    });

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (confirmPassword !== password) {
            return false;
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

                    <div className={styles.passwordContainer}>
                        <Input
                            placeholder="Senha"
                            type={passwordVisible ? 'text' : 'password'}
                            onChange={(event) => handleInputPassword(event)}
                            value={password}
                        />

                        {!passwordVisible
                            ?
                            <img src="/public/icons/closedEye.svg" alt="" className={styles.eyePasswordIcon} onClick={() => handleVisiblePassword()} />
                            :
                            <img src="/public/icons/openEye.svg" alt="" className={styles.eyePasswordIcon} onClick={() => handleVisiblePassword()} />
                        }
                    </div>

                    {passwordValidationVisibility && (
                        <div className={styles.passwordConditionsContainer}>
                            <div className={styles.passwordRequirement}>
                                {hasSpecialChar ?
                                    <img src="/public/icons/SucessIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                    :
                                    <img src="/public/icons/invalidIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                }

                                <p className={hasSpecialChar ? styles.passwordValid : styles.passwordInvalid}>
                                    Mínimo 1 caractere especial
                                </p>
                            </div>

                            <div className={styles.passwordRequirement}>
                                {hasLetter ?
                                    <img src="/public/icons/SucessIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                    :
                                    <img src="/public/icons/invalidIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                }

                                <p className={hasLetter ? styles.passwordValid : styles.passwordInvalid}>
                                    Mínimo 1 letra
                                </p>
                            </div>

                            <div className={styles.passwordRequirement}>
                                {passwordLength ?
                                    <img src="/public/icons/SucessIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                    :
                                    <img src="/public/icons/invalidIcon.svg" alt="" className={styles.passwordValidationIcon} />
                                }

                                <p className={passwordLength ? styles.passwordValid : styles.passwordInvalid}>
                                    Mínimo 6 caracteres
                                </p>
                            </div>
                        </div>
                    )}

                    <Input
                        placeholder="Confirme sua senha"
                        type={passwordVisible ? 'text' : 'password'}
                        onChange={(event) => handleInputConfirmPassword(event)}
                        value={confirmPassword}
                    />

                    {differentPasswordVisibility && (
                        <div className={styles.confirmPasswordRequirement}>
                            <img src="/public/icons/invalidRedIcon.svg" alt="" className={styles.confirmPasswordValidationIcon} />
                            <p className={styles.confirmPasswordInvalid}>
                                As senhas devem ser iguais.
                            </p>
                        </div>
                    )}

                    {alertVisibility && (
                        <AlertMessage
                            message={alertMessage}
                        />
                    )}

                    <div className={styles.buttonsDiv}>
                        <Button
                            text="Cadastrar"
                            available={buttonVisibility}
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