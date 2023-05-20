import { AboutActor, LayoutActor, StyledImgActor } from "./CastFilmCard.styled"

export const CastFilmCard = ({actor}) => {
    return (
        <LayoutActor>
            <StyledImgActor src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt=""/>
            <AboutActor>
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
            </AboutActor>
        </LayoutActor>
    )
}