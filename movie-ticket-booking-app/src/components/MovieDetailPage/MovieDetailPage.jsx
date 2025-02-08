import { useParams } from "react-router-dom";
import "./MovieDetailPage.scss";
import { useEffect, useState } from "react";
import { Movies } from "../../assets/FilmConstant";
import { Theater } from "../../assets/FilmConstant";

const dateList = [
  { day: "Thu", date: 6, month: "Feb" },
  { day: "Fri", date: 7, month: "Feb" },
  { day: "Sat", date: 8, month: "Feb" },
  { day: "Sun", date: 9, month: "Feb" },
  { day: "Mon", date: 10, month: "Feb" },
];

function MovieDetailPage() {
  const { id } = useParams();
  const [selectedMovie, setSelected] = useState(null);

  useEffect(() => {
    const filteredMovie = Movies?.find(
      (movie) => movie.Movie_ID === parseInt(id)
    );
    setSelected(filteredMovie);
  }, [id]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie_detailpage">
      <div
        className="movie_detailpage-header"
        style={{ backgroundImage: `url(${selectedMovie?.bannerImage || ""})` }}
      >
        <img
          src={selectedMovie?.posterImage}
          className="poster_img"
          alt={selectedMovie?.Title}
        />
        <div className="movie_detail-header">
          <h2 className="movie_title">{selectedMovie?.Title}</h2>
          <p className="movie_runtime">Runtime: {selectedMovie?.Runtime}</p>
          <p className="movie_genre">Genre: {selectedMovie?.Genre}</p>
        </div>
      </div>
      <div className="movie_details">
        <div className="movie_release">Released: {selectedMovie?.Released}</div>
        <p className="movie_director">Director: {selectedMovie?.Director}</p>
        <p className="movie_actors">Actors: {selectedMovie?.Actors}</p>
        <p>Language: {selectedMovie?.Language}</p>
        <p>imdbRating: {selectedMovie?.imdbRating}</p>
      </div>
      <div className="date_filter">
        {(dateList || []).map((res) => (
          <div className="date_detail" key={res?.date}>
            <p className="day">{res?.day}</p>
            <p className="date">{res?.date}</p>
            <p className="month">{res?.month}</p>
          </div>
        ))}
      </div>
      <div className="theater_list">
        {Theater.map((theater) => (
          <div className="theater_details" key={theater?.theater_no}>
            <h4 className="theater_name">
              {theater?.theater_name} {theater?.theater_type}:{" "}
              {theater?.theater_location}
            </h4>
            <div className="show_list">
              {theater.theater_screens.map((show) => (
                <div className="show_time" key={show.show}>
                  <div className="time">{show?.time}</div>
                  <div className="screen_no">{show?.screen_no}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailPage;
