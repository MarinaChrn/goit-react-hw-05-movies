import { fetchCastOfFilm } from "api";
import { StyledNavLinks } from "pages/AboutFilm.styled";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { StyledSection } from "./CastFilm.styled";
import { CastFilmCard } from "./CastFilmCard";

const CastFilm = () =>{
    const [castMovie, setCastMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [, setError] = useState(null);
    const {moviesId} = useParams();
    const pathname = `/movies/${moviesId}`
    useEffect(()=> {
        const controller = new AbortController();
        async function fetchSearch () {    
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = await fetchCastOfFilm(moviesId, controller)
                setCastMovie(fetchedSearch.slice(0, 10))
            } catch(error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }
        }
        fetchSearch ()

        return(()=> {
            controller.abort()
        })
    },[moviesId])

    return (
        <StyledSection>
            {(isLoading)&&(<p>Loading...</p>)}
            {(castMovie.length!==0)&&(!isLoading)&&(
                <>
                    {castMovie.map( el =><CastFilmCard actor={el} key={el.id}/>)}
                    <StyledNavLinks to={pathname}>Close</StyledNavLinks>
                </>)}
        </StyledSection>
    )
}

export default CastFilm;