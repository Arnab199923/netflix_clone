    import React, { useState,useEffect } from 'react'
    import axios from "./axios"
    import './Row.css'

    const base_url = "https://image.tmdb.org/t/p/original/"

    function Row({tittle,fetchUrl}) {
    const [Movies,setMovies] = useState([]);

    useEffect(() => {
    async function  fetchData(){
    const request  = await axios.get(fetchUrl)
    // console.log(request)
    setMovies(request.data.results);
    return request;
    }
    fetchData();
    },[fetchUrl]);
    console.log(Movies)


    return (
    <div className='row'>
    <h2>
        {tittle}
    </h2>
    <div className='row_posters'>

    {Movies.map(movie =>(
        <img 
        key={movie.id}
        className='row_poster'
        src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
    ))}
    {/* row posters */}
    </div>
    </div>
    )
    }

    export default Row