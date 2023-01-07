    import React, { useState,useEffect } from 'react'
    import axios from "./axios"
    import './Row.css'
    import YouTube from 'react-youtube'
    import movieTrailer from 'movie-trailer'

    const base_url = "https://image.tmdb.org/t/p/original/"

    function Row({tittle,fetchUrl,isLargeRow}) {
    const [Movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("")

    useEffect(() => {
    async function  fetchData(){
    const request  = await axios.get(fetchUrl)
    setMovies(request.data.results);
    return request;
    }
    fetchData();
    },[fetchUrl]);

    const opts = {
        height:"290",
        width:"50%",
        playerVars:{
            autoplay:1
        },
    };

    const handleClick =(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            }).catch(err=>console.log(err))
        }
    }


    return (
    <div className='row'>
    <h2>
        {tittle}
    </h2>
    <div className='row_posters'>

    {Movies.map(movie =>(
        <img 
        key={movie.id}
        onClick={()=>handleClick(movie)}
        className={`row_poster ${isLargeRow && "is_LargePoster"}`}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
    ))}
    {/* row posters */}
    </div>
   {trailerUrl&& <YouTube videoID={trailerUrl} opts={opts}/>}
    </div>
    )
    }

    export default Row