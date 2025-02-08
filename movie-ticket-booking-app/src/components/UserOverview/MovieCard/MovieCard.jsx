import "./MovieCard.scss";
import { MdOutlineStars } from "react-icons/md";

function MovieCard({ movieDetail }) {
  return (
    <div className="movie_card">
      <div className="movie_image">
        <img src={movieDetail?.posterImage} alt={movieDetail?.Title} />
      </div>
      <div className="movie_rating">
        <div className="rating">
          <MdOutlineStars />
          {movieDetail?.imdbRating}
        </div>
        <div>{movieDetail?.imdbVotes} Votes</div>
      </div>
      <div className="card_footer">
        <p className="movie_title">{movieDetail?.Title}</p>
        <p className="movie_Genre">{movieDetail?.Genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
