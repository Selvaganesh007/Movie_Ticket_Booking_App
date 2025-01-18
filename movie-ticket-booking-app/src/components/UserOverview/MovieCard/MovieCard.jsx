import './MovieCard.scss';
import { MdOutlineStars } from "react-icons/md";


function MovieCard({movieDetail}) {
    return(
        <div className='Content-container'>
            <div className='img-sec'>
                <img src={movieDetail?.Images[0]} alt={movieDetail?.Title}/>
                <div className='rating-sec'>
                    <div className='rating'><MdOutlineStars />{movieDetail?.imdbRating}</div>
                    <div>{movieDetail?.imdbVotes} Votes</div>
                </div>
            </div>
            <h3>{movieDetail?.Title}</h3>
            <div>{movieDetail?.Genre}</div>

        </div>
    )
}

export default MovieCard;