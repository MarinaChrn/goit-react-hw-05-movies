import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    font-size: 26px;
    font-weight: 500;
    &:hover, &:focus {
        color: red;
    }
    &.active {
        color: red;
    }
`

export const Layout = styled.header`
    display: flex;
    margin-top:20px;
    margin-bottom:20px;
    gap: 30px;
`

export const Line = styled.hr`
    color: #ababab;
    margin-left: -80px;
`