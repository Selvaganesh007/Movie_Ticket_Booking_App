import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LandingPage.scss';
import Content from '../Content/Content';
import { Movies } from '../../assets/FilmConstant.js';

function LandingPage() {
  
    return (
      <>
        <Header />
        <div className='movies-container'>
          {Movies.map((movie) => (
            <Content
              key={movie.imdbID}
              movieDetail={movie}
            />
          ))}
        </div>
        <Footer />
      </>
    )
  }
  
  export default LandingPage;