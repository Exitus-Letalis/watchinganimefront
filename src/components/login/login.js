import React, {  } from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchAuth } from '../../redux/auth';
import { Navigate } from 'react-router-dom';

export function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      const user = await dispatch(fetchAuth(values));
      window.localStorage.setItem('token', user.payload.token);
      return <Navigate to ='/'/>
    } catch (error) {
      setError('api', { message: 'Authentication failed' });
    }
  };

  return (
    <form className={styles.formFields} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.usernameInput}
          placeholder="Введіть логін"
          {...register('email', { required: 'Вкажіть логін' })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          type="password"
          className={styles.passwordInput}
          placeholder="Введіть пароль"
          {...register('password', { required: 'Вкажіть пароль' })}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      <button className={styles.loginBtn} type="submit">
        Вхід
      </button>
      {errors.api && <p className={styles.error}>{errors.api.message}</p>}
    </form>
  );
}

Login.propTypes = {
  // Add prop types here if needed
};