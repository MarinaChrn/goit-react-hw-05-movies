import { fetchSearchByValue } from "api";
import ListFilms from "components/ListFilms";
import Searchbox from "components/Searchbox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [,setError] = useState(null);
    const filmValue = searchParams.get("query") ?? "";
    const newSearch = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    }
    
    useEffect(()=> {
        const controller = new AbortController();
        async function fetchSearch () {    
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = await fetchSearchByValue(filmValue, controller)
                setFilms([...fetchedSearch.results])
            } catch(errors) {
                setError(errors)
                
            } finally {
                setIsLoading(false);
            }
        }
        fetchSearch ()

        return(()=> controller.abort())
    },[filmValue])

    return (
        <main>
            {(isLoading)&&(<p>Loading...</p>)}
            {(!isLoading)&&
            (<><Searchbox valueParams={filmValue} onSubmit={newSearch}/>
            <ListFilms arrayFilms={films}/></>)}
            {(films.length===0)&&(filmValue.length!==0)&&(<p>Sorry, we couldn't find films with title: {filmValue}, try another one</p>)}
        </main>
    )
}

export default Movies;