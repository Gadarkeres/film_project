import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'


const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


import './MovieGrid.css';


const Search = () => {



  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')


  useEffect(() => {
    const searchWithQueryURL =`${searchURL}?${apiKey}&query=${query}`
    
    getSearchedMovies(searchWithQueryURL)
       
    },[query])

const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)

}



  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
    <div className="movies-container">
        {movies.length === 0 && <div id="loading">
          <p> Carregando...<br></br>(se esta página não sair desse estado, revise o nome do filme  e tente novamente.)</p>
        </div>}
    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie ={movie}/>)}
    </div>

</div>
  )
}

export default Search