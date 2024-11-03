import React, { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import icon5 from './iconfinder-icon 1.svg';
import icon6 from './iconfinder-icon (5) 1.svg';
import icon7 from './iconfinder-icon (6) 1.svg';
import icon8 from './iconfinder-icon dislike.svg';
import { Swiper, SwiperSlide}  from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiperer.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




function Animeitem() 
{
    const {id} = useParams()
    
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    //Структура аніме
    const {title, synopsis, 
        trailer, duration, aired, 
        images, rank, genres,
         status,type} = anime
         
    //Аніме
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
        console.log(data.data)
    }

    //Персонажі
    const getCharacters = async (anime) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
      const data = await response.json()
      setCharacters(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])


    
  return (
    <div className='AnimeItemStyled'>
      
      <Foto>
          <img src={require('../Прапор_УПА_із_гербом_України.webp')}/>
      </Foto>
      <MainContainer>
      <Container>
      <div className='image' >
        <img className='image' src={images?.jpg.large_image_url} alt=''/>
        </div>
        <div className='detail'>
              <h1 className='nameanime'>{title}
                <div className='animelikeimage'>
                <img src={icon5} alt=' ' />
                <img src={icon6} alt=' ' />
                <img src={icon7} alt=' ' />
                <img src={icon8} alt=' ' />
                </div>
              </h1>
              <div className='anime-details'>
               <p><div className='typetext'>Тип:</div><div className='alltext'>{type}</div></p>
                <p><div className='typetext'>Дата:</div><div className='alltext'>{aired?.string}</div></p>
               <p><div className='typetext'>Ранг:</div><div className='alltext'>{rank}</div></p>
               <p><div className='typetext'>Статус:</div><div className='alltext'>{status}</div></p>
               <p><div className='typetext'>Тривалість:</div><div className='alltext'>{duration}</div></p>
            </div>
        </div>
        </Container>
      <Container2>
       <div className='details'>
       <ButtonPer>
            <div>Коментарі</div>
            <div>Відгуки</div>
            <div>Персонажі</div>
          </ButtonPer>
         <p className='description'> 
             {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
             <button onClick={() => {
            setShowMore(!showMore)
          }}>{showMore ? "Менше" : "Більше"}</button>
          </p>
          <Tags>
              {genres && genres.map((name) => (
               <li className='animetags' key={name.id}>{name.name}</li> // Налаштування тегів аніме
              ))}
          </Tags>
          <List>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            spaceBetween={1}
            slidesPerView={4}
          >
            <div className='characters'>
            {characters?.map((character, index) => {
                const {role} = character;
                const {images, name, mal_id} = character.character;
                return(
                <SwiperSlide key={index}>
                <Link to={`/character/${mal_id}`}>
                  <div className='character'>
                  <img src={images?.jpg.image_url} alt={name}/>
                  <h4>{name}</h4>
                  <p>{role}</p>
                  </div>
                </Link>
                </SwiperSlide>
                );
              })}
            </div>
            </Swiper>
          </List>
          <Trailer>
          <h3 className='title'>Трейлер</h3>
           <div className='trailer-con'>
            {trailer?.embed_url && 
           <iframe 
           src={trailer?.embed_url} 
            title='Inline Frame Example'
            width='800'
            height='450' 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>  
           </iframe>
          }
        </div>
        </Trailer>
      </div>
      </Container2>
      </MainContainer>
    </div>
  )
}





const Foto = styled.div`
width: 70%;
height: 300px;
background-color: red;
display: flex;
margin: auto;
margin-top: 18px;
border-radius: 20px;
overflow: hidden;  
img {
 width: 100%;       
  height: 100%;      
  object-fit: cover; 
}

`;


const MainContainer = styled.div`
display: flex;
gap: 50px;
align-item: flex-start;
padding: 20px;
  padding: 3rem 18rem;
`
const Container = styled.div`

margin-top: -200px;
display: flex;
flex-direction: column;
align-items: left;
padding: 20px;

.image{
width: 350px;
height: auto;
border-radius: 20px;
object-fit: cover;
margin-bottom: 10px;

}
.detail{
padding: 20px;
border-radius: 20px;
max-width: 400px;
width: 100%;
background-color: #1F1F1F;
}
.nameanime{
font-size: 16px;
display: inline-block;
margin-bottom: 1.5rem;
cursor: pointer;
color: #FFFFFF;
}
.typetext{
margin-bottom: 3px;
color: #FFFFFF;
}
.alltext{
margin-bottom: 10px;
color: #B7B1B1;
}
.animelikeimage{
margin-top:10px;
border-bottom: 1px solid white;
width:310px;
display:flex;
justify-content: space-between;
}

`
const Container2 = styled.div`
margin-left: -50px;
margin-top:-20px;

.details{
  background-color: #1F1F1F;
  border-radius: 20px;
  padding: 20px;
  }   
 .description{
     color: #B7B1B1;
     margin-top: 20px;
     line-height: 1.7rem;
      button{
       border: none;
       outline: none;
       color: #FFFFFF;
        font-weight: 600;
        cursor: pointer;
       background-color: transparent;
       font-size: 17px;
       margin-left: 10px;
     }

    }

`
const ButtonPer = styled.div`
color: #E0E0E0;
gap: 150px;
display: flex;
border-bottom: 1px solid white;
padding-bottom: 5px;
width:100%;

`
const Tags = styled.div`
margin-top:20px;
display: flex;
color: #B7B1B1;
gap: 20px;
height:30px;

.animetags{
border-radius: 20px;
border: 1px solid #D9D9D9;
width:50px;
background-color:#413D3D;
display: flex;
align-items: center;
justify-content: center;
width: 120px;
max-width: 100%; 
}

`

const  List = styled.div`
margin-top:30px;
height: 300px;
width:100%;

  .characters{
  display: grid;
  overflow: hidden;
  
}
  .swipe-slide{
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  
  }
  .character{
  display: flex;
  flex-direction: column;
    align-items: center;
    text-align: center;
    width: 250px;  /* Встановлює ширину залежно від дизайну */
  }
    .img {
    width: 100%;
    max-width: 150px; /* Обмежує ширину зображень */
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

`


const Trailer = styled.div`
.title{
  margin-top:30px;
  color: #FFFFFF;
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  }
.trailer-con{
margin-left: 55px;
border: none;
}  
`






export default Animeitem
