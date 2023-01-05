import './App.css';
import Row from './Row';
import request from './requests'
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>


      <Row tittle="Netflix Original" fetchUrl={request.fetchNetflixoriginals}
      isLargeRow/>
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
