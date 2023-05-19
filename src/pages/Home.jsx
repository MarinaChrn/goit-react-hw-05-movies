
import {fetchTrendingMovies} from "api";
import { ListFilms } from "components/ListFilms";
import { useEffect } from "react";

import { useState } from "react";
export const Home = () => {
    const [trend, setTrend] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controller = new AbortController();
        async function fetchSearch () {    
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = await fetchTrendingMovies(controller)
                setTrend([...fetchedSearch.results])
            } catch(errors) {
                setError(errors)
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }
        fetchSearch ()

        return(()=> controller.abort())
    },[])

    return (
        
        (<main>
            {(isLoading)&&(<p>Loading...</p>)}
            {(!isLoading) && (<ListFilms arrayFilms={trend}/>)}
        </main>)
    )}
