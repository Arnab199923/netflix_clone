// const Api = "20589deae102f3a7712e9d7c191348f3"
// api request == https://api.themoviedb.org/3/movie/550?api_key=20589deae102f3a7712e9d7c191348f3 

const request = {
    fetchTrending : '/trending/all/week?api_key=20589deae102f3a7712e9d7c191348f3&language=en-US',
    fetchNetflixoriginals : '/discover/tv?api_key=20589deae102f3a7712e9d7c191348f3&with_networks=213',
    fetchToprated : '/movie/top_rated?api_key=20589deae102f3a7712e9d7c191348f3&language=en-US',
    fetchActionmovies : '/discover/movie?api_key=20589deae102f3a7712e9d7c191348f3&with_genres=28',
    fetchComedymovies : '/discover/movie?api_key=20589deae102f3a7712e9d7c191348f3&with_genres=35',
    fetchHorrormovies : '/discover/movie?api_key=20589deae102f3a7712e9d7c191348f3&with_genres=27',
    fetchRomancemovies : '/discover/movie?api_key=20589deae102f3a7712e9d7c191348f3&with_genres=10749',
    fetchDocumentaries : '/discover/movie?api_key=20589deae102f3a7712e9d7c191348f3&with_genres=99',
    
}
export default request;