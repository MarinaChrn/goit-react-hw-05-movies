import { useLocation } from "react-router-dom";
import {ListFilmItem} from "./ListFilmItem";
import { List } from "./ListFilms.styled";
import PropTypes from "prop-types";

const ListFilms = ({arrayFilms}) => {
    const location = useLocation();
    return (
        <List>
            {(arrayFilms.length!==0)&&(
                arrayFilms.map(element => <ListFilmItem filmInf={element} key={element.id} state={{ from: location }}/>)
            )}
        </List>
    )
}

export default ListFilms;
ListFilms.propTypes = {
    arrayFilms: PropTypes.array.isRequired,
}