import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route , Routes  } from 'react-router-dom'

// pages
import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
  <Route element={ <App />}>
    <Route path='/film_project/' element={<Home/>}/>
    <Route path='film_project/movie/:id' element={<Movie/>}/>
    <Route path='film_project/search' element={<Search/>}/>
  </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
