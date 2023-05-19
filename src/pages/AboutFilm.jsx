import { fetchDetailsMovie } from "api";
import { useParams, useLocation, NavLink, Link} from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import { Loading } from "components/Loading";
import { Suspense } from "react";

export const AboutFilm = ()=> {
    const movieId = useParams().moviesId;
    const [infoMovie, setInfoMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(()=>{
        const controller = new AbortController();
        async function fetchSearch () {    
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = await fetchDetailsMovie(movieId,controller)
                setInfoMovie(fetchedSearch)
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
    },[movieId])
    

    if (isLoading===true) {
        return (
            <p>Loading...</p>
        )
    }
    if (isLoading!==true&&infoMovie.length!==0&&!error) {
        return (
            <Suspense fallback={<Loading />}>
                <div>
                    <NavLink to={backLinkLocationRef.current}>Go back</NavLink>
                    <div>
                        <img src={(infoMovie.poster_path)&&(`https://image.tmdb.org/t/p/original${infoMovie.poster_path}`)} alt="" width="200px"/>
                        <div>
                            <h1>{(infoMovie.title!==undefined)?infoMovie.title:infoMovie.name}</h1>
                            <p>User Score: {(infoMovie.vote_average)&&(infoMovie.vote_average).toFixed(1)*10}%</p>
                            <h2>Overview</h2>
                            <p>{infoMovie.overview}</p>
                            <h2>Genres</h2>
                            <p>{(infoMovie.genres)&&(infoMovie.genres.map(genre=> genre.name).join(" "))}</p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to="cast" state={location.state}>Cast</Link>
                        </li>
                    </ul>
                </div>
            </Suspense>
        )
    }
}