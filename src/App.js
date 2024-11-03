
import './App.css';
import { Auth } from './Pages/Auth';
import Popular from './PopularAnime/Popular';
import {Route, Routes} from "react-router-dom";
import Animeitem from './components/animepage/Animeitem';
import { useDispatch } from 'react-redux';
import React from 'react';
import { fetchAuthMe } from './redux/auth';
import Up from './components/Up';



function Main() {

  const distpatch = useDispatch();

  React.useEffect(() => {

    distpatch(fetchAuthMe());
  }, [])
  return (
    <>
    <Up/>
    <Routes>
      <Route path="/" element={<Popular />}/>
      <Route path="/anime/:id" element={<Animeitem/>}/>
      <Route path="/login" element={<Auth/>}/>
    </Routes>
    </>
  );
}

export default Main;
