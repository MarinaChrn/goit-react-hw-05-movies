import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/movies" end>Movies</NavLink>
            <Outlet/>
        </div>
    );
  };