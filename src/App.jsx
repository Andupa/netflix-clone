 import React from 'react';
import './App.css';
import movieRequestUrl from './requetUrls';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
 
 /* trending/all/week?api_key=a5e326bc2246f6c1bd6cc25850d2177d&language=en-US */
function App() {
  return (
   
    <div className="App">
     <Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={movieRequestUrl.fetchNetflixOriginals}isLargeRow ="true"/>
    <Row title="Trending Now" fetchUrl={movieRequestUrl.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={movieRequestUrl.fetchTopRatedMovies}/>
    <Row title="Action Movies" fetchUrl={movieRequestUrl.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={movieRequestUrl.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={movieRequestUrl.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={movieRequestUrl.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
