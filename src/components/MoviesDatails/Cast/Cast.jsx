
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiGet from '../../../utils/ApiFilmes'
const Cast = () => {
    const { movieId } = useParams()
    const [castInfo, setCastInfo] = useState([])
  
    
    useEffect(() => {
        const fn = async () => {
            try {
                const reviewsList = await apiGet.getCharacter(movieId);
                setCastInfo(reviewsList)
                
            } catch (error) {
                alert(error)
            }
        }
        fn()
    }
        , [movieId])
    
    return (
        <>
            {castInfo && (castInfo.map(({ profile_path, original_name, character, id }) => {
             
              return (
                <div key={id}>
                  <img style={{height: '20vw'}} src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="poster of character" />
                  <div>
                    <div>
                      <h3>{original_name}</h3>
                      <h3>{character || 'хз))'}</h3>
                    </div>
                  </div>
                </div>
              );
            }))}
            <h2>No Cast</h2>
        </>
        
    );
}
 
 
export default Cast;