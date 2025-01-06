import './Content.scss';
import Star from '../../assets/star-svgrepo-com.svg'

function Content({movieDetail}) {
    return(
        <div className='Content-container'>
            <div className='img-sec'>
                <img src={movieDetail?.Images[0]} alt={movieDetail?.Title}/>
                <div className='rating-sec'>
                    <div className='rating'><img src={Star} /> {movieDetail?.imdbRating}</div>
                    <div>{movieDetail?.imdbVotes} Votes</div>
                </div>
            </div>
            <h3>{movieDetail?.Title}</h3>
            <div>{movieDetail?.Genre}</div>

        </div>
    )
}

export default Content;