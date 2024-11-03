import React from 'react'
import { useGlobalContext } from '../Context/gloabl'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon5 from './iconfinder-icon (4) 3.svg';

function Popular() {
  

  const {popularAnime, isSearch} =  useGlobalContext()

  const conditionalRender = () => {
    if (!isSearch){
      return popularAnime.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`}key={anime.mal_id}>
          <div className='animeimage'>
          <img src={anime.images.jpg.large_image_url} alt=''/>
            
              <div className='animetitle'>{anime.title}</div>
            
          </div>
        </Link>
      })
    }
  }
 


  return (
    <div className='maincont'>
    <PopularStyled>
      
      <div className="popular-anime">
        <Text>
          <input type='text' className='textborder' placeholder=' Пошук' />
          <img  className='image5'  src={icon5} alt=' ' />
        </Text>
        <AnimeFonts>
        <div className='animeboard'>

        {conditionalRender()}
        </div>
        </AnimeFonts>
      </div>
    </PopularStyled>
    </div>
  )
}

const AnimeFonts = styled.div`
display: flex;  
flex-direction: column;
align-items: center;

.animetitle{
color: #DADADA;
margin-top: 10px;
text-align: center;
background-color: #2A2A2A;
 border-radius: 20px;
 height:110px;
margin-top:-50px;
padding-top: 50px;
}



.animeimage{
width: 150px;
height: auto;
width: 90%;
 height: 75%;
}

.animeboard{
   width: 100%;
   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    display: grid;
    grid-gap: 10px;
    margin-bottom:100px;
   } 
    a{
    width: 100%;
     height: 100%;
  object-fit: cover; 
    display: flex;
margin: auto;
display:flex;
align-items: center;
justify-content: center;
    
    }
    a img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    }
  }
    .popular-anime{
  border-radius: 20px;
  margin-left:470px;
    margin-top: 70px;
    padding-left: 10px;
    padding-right: 10px;
    width: 50%;
    height:1700px;
    margin-bottom:50px;
    background-color:  #1C1B1B;

`
const Text = styled.div`
display:flex;
height:30px;
justify-content: center; 
align-items: center;
margin-top:15px;
border-bottom: 1px solid white;

.textborder{
outline:none;
border:none;
align-items: center;
border-radius: 5px;
height:25px;
width:300px;
background-color:#D9D9D9;
padding-left:10px;
margin-bottom:10px;
}

.image5{
margin-left:5px;
margin-top:-10px;
}
`


const PopularStyled = styled.div`
background-image: url(${require('../components/background.png')}); 
  background-position: center; 
  display: flex;
  height:1080px;

`;

export default Popular
