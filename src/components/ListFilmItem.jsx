import { Link } from "./ListFilmItem.styled";
import PropTypes from "prop-types"

export const ListFilmItem = ({filmInf, state})=> {
    return (
        <li>
            <Link to={`/movies/${filmInf.id}`} end  state={state}>{`${(filmInf.title!==undefined)?filmInf.title:filmInf.name}`}</Link>
        </li>
    )
}

ListFilmItem.propTypes = {
    filmInf: PropTypes.object,
    state: PropTypes.object.isRequired,
}