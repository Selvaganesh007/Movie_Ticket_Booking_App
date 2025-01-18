// import { useParams } from 'react-router-dom';
// import './MovieDetailPage.scss';
// import { useEffect, useState } from 'react';
// import { Movies } from '../../assets/FilmConstant'; 

// function MovieDetailPage() {
//   const { id } = useParams();
//   const [selectedMovie, setSelected] = useState({});

//   useEffect(() => {
//     // console.log(id);
//     const filteredMovie = Movies?.find((movie) => movie.imdbID === id);
//     setSelected(filteredMovie);
// console.log(selectedMovie);
//   });

//   return(
//     <div className='detailpage-cont'>
//       <img src={selectedMovie?.Images[0]} className='movie-img'/>
//       <div>sdfdf</div>
//     </div>
//   )
// }

// export default MovieDetailPage;

import { useParams } from 'react-router-dom';
import './MovieDetailPage.scss';
import { useEffect, useState } from 'react';
import { Movies } from '../../assets/FilmConstant'; 
import { Button } from 'antd';

function MovieDetailPage() {
  const { id } = useParams();
  const [selectedMovie, setSelected] = useState(null); 

  useEffect(() => {
    const filteredMovie = Movies?.find((movie) => movie.imdbID === id);
    setSelected(filteredMovie);
  }, [id]); 

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailpage-cont">
      <div className='movie-details'>
        <img src={selectedMovie?.Images[0]} className="movie-img" alt={selectedMovie?.Title} />
        <div className='details'>
          <h1>{selectedMovie?.Title}</h1>
          <div className='split-sec'><span>Released : {selectedMovie?.Released}</span><span>Genre : {selectedMovie?.Genre}</span></div>
          <div> Director : {selectedMovie?.Director}</div>
          <div>Writer : {selectedMovie?.Writer}</div>
          <div> Actors : {selectedMovie?.Actors}</div>
          <div className='split-sec'><span> Language : {selectedMovie?.Language}</span><span>imdbRating : {selectedMovie?.imdbRating}</span></div>
        </div>
      </div>
      <h1 className='show-text'>Shows premire</h1>
      <div className='time-btncont'>
        <Button>7.00 AM - 10 AM</Button>
        <Button>10.30 AM - 1.30 PM</Button>
        <Button>2.00 PM - 5.00 PM</Button>
        <Button>5.30 PM - 8.30 PM</Button>
        <Button>9.00 PM - 12.00 PM</Button>
      </div>
    </div>
  );
}

export default MovieDetailPage;
