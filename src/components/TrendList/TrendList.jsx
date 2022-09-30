import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const TrendList = ({ filmes }) => {

  const location = useLocation()

  return filmes.map(({ poster_path, title, name, id }) => {
    return (
        <Link key={id} state={location} to={`/movies/${id}`}>
      <div >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
                width='200px'>
            </img>
            <h2>{title || name}</h2>
              </div>
           </Link >
    );
  });
};
TrendList.propTypes = PropTypes.shape({
    poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
   id: PropTypes.string,
})
  
export default TrendList;


