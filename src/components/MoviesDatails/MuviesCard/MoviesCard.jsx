import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import apiGet from '../../../utils/ApiFilmes';
import styles from './MoviesCard.module.css'

const MoviesCard = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = async () => {
      try {
        const array = await apiGet.movieById(movieId);
        setData(array);
      } catch (error) {
        alert(error.message);
      }
    };
    fn();
  }, [movieId]);

  const {
    backdrop_path,
    title,
    original_title,
    vote_average,
    poster_path,
    release_date,
    overview,
    genres,
  } = data;

  return (
    Object.keys(data).length > 0 && (
      <div>
        <div
          className={styles.poster}
          style={{
          background: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
        }}
      >
        <div
          key={movieId}
          className={styles.muvieCardBlock}
        >
            <button
              className={styles.goBackButton}
            
            onClick={() => navigate(location.state)}
          >
            ↩️ <br></br> go back
          </button>
            <img
              className={styles.posterImg}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />
          <div style={{ padding: '40px' }}>
            <h1>
              {title || original_title}
              <span> ({release_date})</span>
            </h1>
            <p>
              User score <span> {vote_average}</span>
            </p>
            <h3>Overview</h3>
            <p>{overview || 'нажаль опис поки в розробці'}</p>
            <h3>Genres</h3>
            <p>{genres.map(gen => gen.name + ' ')}</p>
            <div className={styles.styleLinkButton} >
              <Link state={location.state} to={`/movies/${movieId}/reviews`}>
                Reviews
              </Link>
              <Link state={location.state} to={`/movies/${movieId}/cast`}>
                Cast
              </Link>
            </div>
          </div>
        </div>
          <div className={styles.filmList}> 
        </div>
      </div>
      <Outlet/>
      </div >
    )
  );
};

export default MoviesCard;
