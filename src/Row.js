    import React, { useState,useEffect } from 'react'
    import axios from "./axios"
    import './Row.css'
    import YouTube from 'react-youtube'

    const base_url = "https://image.tmdb.org/t/p/original/"

    function Row({tittle,fetchUrl,isLargeRow}) {
    const [Movies,setMovies] = useState([]);

    useEffect(() => {
    async function  fetchData(){
    const request  = await axios.get(fetchUrl)
    setMovies(request.data.results);
    return request;
    }
    fetchData();
    },[fetchUrl]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{

            autoplay:1,
        },
    };



    return (
    <div className='row'>
    <h2>
        {tittle}
    </h2>
    <div className='row_posters'>

    {Movies.map(movie =>(
        <img 
        key={movie.id}
        className={`row_poster ${isLargeRow && "is_LargePoster"}`}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
    ))}
    {/* row posters */}
    </div>
    <YouTube videoID="ipH-KIn3F5E" opts={opts}/>
    </div>
    )
    }

    export default Row