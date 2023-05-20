import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    font-size: 18px;
    display: flex;
    gap: 5px;
    align-items: center;
    &:hover, &:focus {
        color:red;
    }
    margin-bottom: 20px;
    margin-top: 20px;
`

export const StyledLayout = styled.div`
    display: flex;
    gap: 80px;
    margin: 20px 0;
`

export const StyledImg = styled.img`
    width: 300px;
    height: auto;
`

export const StyledAboutFilm = styled.div`
    max-width: 500px;
`