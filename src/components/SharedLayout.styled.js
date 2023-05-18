import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    font-size: 26px;
    font-weight: 500;
    &:hover {
        color: red;
    }
    &.active {
        color: red;
    }
`