import TrendList from 'components/TrendList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiGet from 'utils/ApiFilmes';
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
        <div
        style={{
            padding: '30px 40px',
            display: 'flex',
            justifyContent: 'flex-start',
        }}
    >
        <form onSubmit={handleSubmit} >
            <input
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '300px' }}
                type="text"
            />
            <button type='submit' style={{ alineItems: 'center' }}>🔎</button>
        </form>
    </div>
       { filmList.length > 0 && <TrendList  filmes={filmList}/> }
        </>
     
);
};

export default Movies;
