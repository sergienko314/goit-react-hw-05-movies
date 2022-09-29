import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import apiGet from '../../utils/ApiFilmes';

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
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: '30px 0px',
          color: 'white',
          textShadow: '1px 1px 2px black',
        }}
      >
        <div
          key={movieId}
          style={{
            backgroundColor: 'rgba(124, 125, 126, 0.426)',
            flexDirection: 'row',
            display: 'flex',
            margin: '0',
            maxWidth: '100%',
          }}
        >
          <button
            style={{
              maxHeight: '50vw',
              fontSize: '45px',
              backgroundColor: 'rgba(124, 125, 126, 0.426)',
              color: 'white',
            }}
            onClick={() => navigate(location.state)}
          >
            ↩️ <br></br> go back
          </button>
          <img
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '50vw',
              maxHeight: '100%',
            }}
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
            <div
              style={{
                padding: '50px',
                display: 'flex',
                color: 'white',
                fontSize: '23px',
                gap: '30px',
              }}
            >
              <Link state={location.state} to={`/movies/${movieId}/reviews`}>
                Reviews
              </Link>
              <Link state={location.state} to={`/movies/${movieId}/cast`}>
                Cast
              </Link>
            </div>
          </div>
        </div>
        <div style={{
            display: 'flex',
            gap: '15px',
            // justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MoviesCard;
