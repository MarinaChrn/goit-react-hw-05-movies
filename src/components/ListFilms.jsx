import { ListFilmItem } from "./ListFilmItem"

export const ListFilms = ({arrayFilms}) => {
    return (
        <ul>
            {(arrayFilms.length!==0)&&(
                arrayFilms.map(element => <ListFilmItem filmInf={element} key={element.id}/>)
            )}
        </ul>
    )
}