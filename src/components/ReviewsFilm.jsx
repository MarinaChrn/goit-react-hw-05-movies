import { fetchReviewsOfFilm } from "api";
import { StyledNavLinks } from "pages/AboutFilm.styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSection } from "./ReviewsFilm.styled";
import { ReviewsFilmCard } from "./ReviewsFilmCard";

export const ReviewsFilm = () => {
    const [reviewMovie, setReviewMovie] = useState([]);
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
                const fetchedSearch = await fetchReviewsOfFilm(moviesId, controller)
                setReviewMovie(fetchedSearch)
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

    if(isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if (reviewMovie.length!==0) {
        return (<StyledSection>
            {(reviewMovie.length!==0)&&(!isLoading)&&(
                <>
                    {(reviewMovie.length!==0)&&(reviewMovie.map( el =><ReviewsFilmCard review={el} key={el.id}/>))}
                    <StyledNavLinks to={pathname}>Close</StyledNavLinks>
                </>)}
        </StyledSection>)
    }

    if (reviewMovie.length===0) {
        return (<StyledSection>
            <p>There're no reviews for this movie</p>
            <StyledNavLinks to={pathname}>Close</StyledNavLinks>
        </StyledSection>)
    }
}