
import fetchTrendingMovies from "api";
import { ListFilms } from "components/ListFilms";
import { useEffect } from "react";

import { useState } from "react";
export const Home = () => {
    const [trend, setTrend] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const ERROR_MESSAGE = "Sorry, we couldn`t get information"

    useEffect(()=>{
        const controller = new AbortController();
        async function fetchSearch () {    
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = await fetchTrendingMovies(controller)
                setTrend([...fetchedSearch.results])
            } catch(error) {
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
