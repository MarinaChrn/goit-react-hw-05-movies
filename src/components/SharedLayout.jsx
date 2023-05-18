import { useRef } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HomeLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location);
    console.log(location.pathname)

    return (
        <div>
            <HomeLink to="/">Home</HomeLink>
            <HomeLink to="/movies">Movies</HomeLink>
            <Outlet/>
        </div>
    );
  };
