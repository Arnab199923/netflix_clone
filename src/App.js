import './App.css';
import Row from './Row';
import request from './request'

function App() {
  return (
    <div className="App">
      <h1>this is react clone</h1>
      <Row tittle="Netflix Original" fetchUrl={request.fetchNetflixoriginals}/>
      <Row tittle="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row tittle="Top Rated" fetchUrl={request.fetchToprated}/>
      <Row tittle="Action Movies" fetchUrl={request.fetchActionmovies}/>
      <Row tittle="Comedy Movies" fetchUrl={request.fetchComedymovies}/>
      <Row tittle="Horror Movies" fetchUrl={request.fetchHorrormovies}/>
      <Row tittle="Romance Movies" fetchUrl={request.fetchRomancemovies}/>
      <Row tittle="Documenteries Movies" fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
