import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon1 from './iconfinder-icon (6) 2.svg';
import icon2 from './iconfinder-icon (3) 2.svg';
import icon3 from './iconfinder-icon (4) 2.svg';
import icon4 from './image 2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/auth';

const Up = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { data } = useSelector((state) => state.auth);

  const onClickLogout = () => {
    if (window.confirm('Ви точно хочете вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <UpContainer>
      <Link to="/" className='site'>
        Amimesiteforyou
      </Link>
      <UpFunction>
        <div className='function1'>
          <img src={icon1} alt=' ' />
          Уподобання
        </div>
        <div className='function2'>
          <img src={icon2} alt=' ' />
          Каталог
        </div>
        <div className='function3'>
          <img src={icon3} alt=' ' />
          Пошук
        </div>
        {isAuth ? (
          <>
            <p className='Welcom'>Вітаю {data.fullName}</p>
            <p className='Exit' onClick={onClickLogout}>Вихід</p>
          </>
        ) : (
          <Link to="/login" className='logbutton'>
            <img src={icon4} alt=' ' />
            Вхід
          </Link>
        )}
      </UpFunction>
    </UpContainer>
  );
};

const UpContainer = styled.div`
  width: 100%;
  color: #DADADA;
  height: 50px;
  background-color: #1C1B1B;
  display: flex;
  gap: 400px;

  .site {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 150px;
    font-size: 30px;
    color: #DADADA;
  }
`;

const UpFunction = styled.div`
  color: #DADADA;
  display: flex;
  gap: 200px;

.Welcom{

margin-left: 60px;
    color: #DADADA;
    border: none;
    border-radius: 10px;
    background-color: #413D3D;
    margin-top: 15px;
    height: 25px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:1px;
}


.Exit{
margin-left: 60px;
    color: #DADADA;
    border: none;
    border-radius: 10px;
    background-color: #413D3D;
    margin-top: 15px;
    height: 25px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:-170px;

}

  .logbutton {
    margin-left: 60px;
    color: #DADADA;
    border: none;
    border-radius: 10px;
    background-color: #413D3D;
    margin-top: 15px;
    height: 25px;
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .function1,
  .function2,
  .function3 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Up;