import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiGet from '../../utils/ApiFilmes'
const Reviews = () => {
    const { movieId } = useParams()
    const [reviuesInfo, setReviuesInfo] = useState([])

    useEffect(() => {
        const fn = async () => {
            try {
                const reviewsList = await apiGet.getReviews(movieId);
                setReviuesInfo(reviewsList)
                
            } catch (error) {
                alert(error)
            }
        }
        fn()
    }
        , [movieId])
    
    return (
        <>
            {reviuesInfo.length > 0 ? (
            reviuesInfo.map(({ id, author, content }) => {
                return (
                    <ul>
                        <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                        </li>
                    </ul>)
            }
                )) : <h2>No Reviues</h2>}
        </>
        
    );
}
 
export default Reviews;


// 