import TrendList from 'components/TrendList/TrendList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiGet from 'utils/ApiFilmes';
import style from "./Movies.module.css";
const Movies = () => {
    const [input, setInput] = useState('');
    const [filmList, setFilmList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    
    const query = searchParams.get('input')
    
    useEffect(() => {
       if (!query) return;
        const fn = async () => {
            try {
        const apiArray = await apiGet.getCinemaByName(query)
        setFilmList(apiArray)
    } catch (error) {
        return alert({ error })
            }
        }
        fn()
} , [query] )

const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = input.trim();
    if (userInput === '') {
        return alert('fill in the fields');
    }
    setSearchParams({input: userInput})
};
    return (
        <>
        <div className={style.serchForm} >
        <form onSubmit={handleSubmit} >
            <input
                onChange={(e) => setInput(e.target.value)}
                className={style.input}
                type="text"
            />
            <button type='submit' className={style.buttonSerch}>🔎</button>
        </form>
    </div>
       { filmList.length > 0 && <TrendList  filmes={filmList}/> }
        </>
     
);
};

export default Movies;
