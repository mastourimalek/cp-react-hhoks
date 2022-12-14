import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Footerr from './Component/Footerr'
import "./MovieApp.css";
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Admin from "./Pages/Admin";
import Erreur from "./Pages/Erreur";
import App from './App'
import MovieDescription from './Pages/MovieDescription';
import { moviesData } from './Component/Data';

const MovieApp = () => {
  const [movies, setMovies] = useState(moviesData);
    const[isAuh,setIsAuth]=useState(false)

  return (
    <div className='one'>
         <NavBar/>
        <Routes>
        <Route exact path='/' element={<App/>} />
        <Route  path="/" element={<Home/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Contactus" element={<Contactus/>} />
        <Route path="/*" element={<Erreur/>} />
        {isAuh?
        <Route path="/Admin" element={<Admin/>} />
        :<Route path="/*" element={<Erreur/>} />
      } 
      <Route path="/MovieDescription/:id" element={<MovieDescription movies={movies} />}  />
        </Routes>
        <br />
        <Footerr/>
    </div>
  )
}

export default MovieApp