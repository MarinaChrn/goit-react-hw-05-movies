
import { Outlet } from "react-router-dom";
import { HomeLink, Layout, Line } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <>
            <Layout>
                <HomeLink to="/">Home</HomeLink>
                <HomeLink to="/movies">Movies</HomeLink>
            </Layout>
            <Line/>
            <Outlet/>
        </>
    );
  };

  export default SharedLayout;