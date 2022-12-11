import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Component/Data";
import FilterMovie from "./Component/FilterMovie";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie"
import NavBar from "./Component/NavBar";
import Footerr from "./Component/Footerr";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Admin from "./Pages/Admin";
import Erreur from "./Pages/Erreur";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const add =(newMovies)=>{
setMovies([...movies,newMovies])
  }

  const [inputSearch, setInputSearch]=useState("")
  const [inputRate, setInputRate]=useState(0)

  const[isAuh,setIsAuth]=useState(false)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Contactus" element={<Contactus/>} />
        <Route path="/*" element={<Erreur/>} />
        {isAuh?
        <Route path="/Admin" element={<Admin/>} />
        :<Route path="/*" element={<Erreur/>} />
      }
        </Routes>
      <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} inputRate={inputRate} setInputRate={setInputRate}   />
      <MovieList movies={movies} inputSearch={inputSearch} inputRate={inputRate} />
      <AddMovie add={add} />
      
      <br />
      <Footerr />
    </div>
  );
}

export default App;
