import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './LandingPage.scss';
import MovieCard from '../MovieCard/MovieCard.jsx';
import { Movies } from '../../../assets/FilmConstant.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [searchInput, setSearchInput] = useState('');

  const [moviesData, setMoviesData] = useState([]);

  const onChangeSearchInput = (value) => {
    setSearchInput(value);
  }

  useEffect(() => {
    const filtered = Movies.filter(item => item.Title.toLowerCase().includes(searchInput.toLowerCase()));
    setMoviesData(filtered);
  },[searchInput]);

  
    return (
      <>
        <Header handleSearch={onChangeSearchInput} searchInput={searchInput} />
        <div className='movies-container'>
          {moviesData?.map((movie) => (
            <Link key={movie.imdbID} className='clickable' to={`${movie?.imdbID}`}>
              <MovieCard
                key={movie.imdbID}
                movieDetail={movie}
              />
            </Link>
          ))}
        </div>
        <Footer />
      </>
    )
  }
  
  export default LandingPage;