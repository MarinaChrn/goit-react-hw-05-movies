
import {fetchTrendingMovies} from "api";
import ListFilms from "components/ListFilms";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [trend, setTrend] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [,setError] = useState(null);

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
                
            } finally {
                setIsLoading(false);
            }
        }
        fetchSearch ()

        return(()=> controller.abort())
    },[])

    return (
        
        (
            <main>
                {(isLoading)&&(<p>Loading...</p>)}
                {(!isLoading) && (<ListFilms arrayFilms={trend}/>)}
            </main>
        )
    )}

export default Home;