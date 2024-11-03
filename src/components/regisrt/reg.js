import React  from 'react';
import styles from './index2.module.scss';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/auth';
import { useForm } from 'react-hook-form';

export function Regis() {
    const distpatch = useDispatch();
  const { register, handleSubmit} = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values) => {
    try {
        const reguser = await distpatch(fetchRegister(values));
        if (reguser?.payload?.token) {
            window.localStorage.setItem('token', reguser.payload.token);
        } else {
            console.error("Token is missing from the response");
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
};

    return (
        <div className={styles.formFields}>
            <form className={styles.inputGroup} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    name="email"
                    className={styles.rememberMeField}
                    placeholder="Введіть Email"
                    {...register('email', { required: 'Вкажіть пошту ' })}
                />

                <input
                    type="text"
                    name="fullName"
                    className={styles.usernameInput}
                    placeholder="Введіть логін"
                    {...register('fullName', { required: 'Вкажіть логін ' })}
                />

                <input
                    type="password"
                    name="password"
                    className={styles.passwordInput}
                    placeholder="Введіть пароль"
                    {...register('password', { required: 'Вкажіть пароль ' })}
                />

                <button  className={styles.loginBtn}>
                    Реєстрація
                </button>
            </form>
        </div>
    );
}
