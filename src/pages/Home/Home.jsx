import TrendList from 'components/TrendList';
import { useEffect, useState } from 'react';
import apiGet from '../../utils/ApiFilmes';

const Home = () => {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const arrayFilms = await apiGet.popular();
        setCinema(arrayFilms);
      } catch (error) {
        alert(error(error.message));
      }
    })();
  }, []);

  return (
    <>
      <h1>Tranding Filmes </h1>
      <div>
        <div
          style={{
            display: 'flex',
            gap: '30px',
            fontSize: '23px',
            padding: '50px',
          }}
        >
          <TrendList filmes={cinema} />
        </div>
      </div>
    </>
  );
};

export default Home;
