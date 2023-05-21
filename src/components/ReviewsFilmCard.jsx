import { NameOfUser, StyledCreatedAt, StyledHeadReview, StyledHeadReviewAbout, StyledIcon, StyledReview, StyledUsername } from "./ReviewsFilmCard.styled"
import PropTypes from "prop-types";

export const ReviewsFilmCard = ({review}) => {
    const imgPath = (review.author_details.avatar_path.includes("https"))? review.author_details.avatar_path.slice(1)
    : `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
    return (
        <StyledReview>  
            <StyledHeadReview>
                <StyledIcon src={imgPath} alt=""/>
                <StyledHeadReviewAbout>
                    <NameOfUser>{review.author}</NameOfUser>
                    <StyledUsername>@{review.author_details.username}</StyledUsername>
                </StyledHeadReviewAbout>
            </StyledHeadReview>
            <>
                <p>{review.content}</p>
                <StyledCreatedAt>Created at: {review.created_at.slice(0,10)}</StyledCreatedAt>
            </>
        </StyledReview>
    )
}

ReviewsFilmCard.propTypes = {
    review: PropTypes.object.isRequired
}