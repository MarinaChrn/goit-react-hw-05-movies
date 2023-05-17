import { NavLink } from "react-router-dom";

export const ListFilmItem = ({filmInf})=> {
    return (
        <li>
            <NavLink to={`/movies/${filmInf.id}`}end>{`${(filmInf.title!==undefined)?filmInf.title:filmInf.name}`}</NavLink>
        </li>
    )
}