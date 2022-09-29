import { Link, useLocation } from "react-router-dom";


const TrendList = ({ filmes }) => {

  const location = useLocation()

  return filmes.map(({ poster_path, title, name, id }) => {
    return (
        <Link state={location} to={`/movies/${id}`}>
      <div key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
                key={id}
                width='200px'>
            </img>
            <h2>{title || name}</h2>
              </div>
           </Link >
    );
  });
};

export default TrendList;
