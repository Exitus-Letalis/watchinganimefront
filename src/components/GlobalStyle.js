import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    *{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    }

body{

    background-image: url(${require('../components/background.png')}); 
}
    `;
 

export default GlobalStyle;