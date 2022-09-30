import TrendList from 'components/TrendList/TrendList';
import { useEffect, useState } from 'react';
import apiGet from '../../utils/ApiFilmes';
import style from "./Home.module.css";

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
         className={style.trendingBlok}>
          <TrendList filmes={cinema} />
        </div>
      </div>
    </>
  );
};

export default Home;
