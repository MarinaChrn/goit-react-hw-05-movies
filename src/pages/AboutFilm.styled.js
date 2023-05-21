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

export const ListStyledLinks = styled.ul`
    display: flex;
    gap: 20px;
    padding: 0;
    margin-bottom: 20px;
    list-style: none;
`
export const StyledLinks = styled.li`  
`

export const StyledNavLinks = styled(NavLink)`
    text-decoration: none;
    background-color: #ababab;
    color: black;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover, &:focus {
        background-color: #a6cdff;
    }
`