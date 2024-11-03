import React,{useState} from 'react';

import cn from 'classnames';
import styles from './index.module.scss';
import { Login } from '../../components/login/login';
import { Regis } from  '../../components/regisrt/reg'

export function Auth() {

    const [isLogin, setIsLogin] = useState({
        isLogin:true,
    });
  return (
    <section
      className={cn(styles.loginSection,  'login')}
      style={{ '--src': `url(${'/assets/a2905b59ab6e368c678a1c52ccfe6e21.png'})` }}>
      {/* Login and registration section */}

      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <nav className={styles.tabsContainer}>
                <p className={isLogin?styles.loginTab: styles.registrationTab}onClick={()=> setIsLogin(false)} disabled={!isLogin}>Вхід</p>
                <p className={isLogin?styles.registrationTab: styles.loginTab}onClick={()=> setIsLogin(true)} disabled={isLogin}>Реєстрація</p>
              </nav>
              <div className={styles.tabDivider} />
            </div>
            {!isLogin?(<Login/>):(<Regis/>)}
          </div>

          <p className={styles.passwordRecovery_box}>
            <span className={styles.passwordRecovery}>
              <span className={styles.passwordRecovery_span0}>Забули пароль? </span>
              <span className={styles.passwordRecovery_span1}>Відновити</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

