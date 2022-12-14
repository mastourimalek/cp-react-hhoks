import React, { useState } from 'react'
import "./App.css";
import { moviesData } from "./Component/Data";
import FilterMovie from "./Component/FilterMovie";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie"





const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const add =(newMovies)=>{
setMovies([...movies,newMovies])
  }

  const [inputSearch, setInputSearch]=useState("")
  const [inputRate, setInputRate]=useState(0)
  return (
    <div className="App">
 <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} inputRate={inputRate} setInputRate={setInputRate}   />
      <MovieList movies={movies} inputSearch={inputSearch} inputRate={inputRate} />
      <AddMovie add={add} />
     
    </div>
  )
}

export default App