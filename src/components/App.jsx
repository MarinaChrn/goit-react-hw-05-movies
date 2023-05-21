
import {lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ReviewsFilm } from "./ReviewsFilm";
const Home = lazy(()=> import("../pages/Home"));
const CastFilm = lazy(()=> import("./CastFilm"));
const SharedLayout = lazy(()=> import("./SharedLayout"));
const AboutFilm = lazy(()=> import("../pages/AboutFilm"));
const Movies = lazy(()=> import("../pages/Movies"));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path='/movies' element={<Movies />} />
          <Route path="/movies/:moviesId" element={<AboutFilm/>}>
            <Route path="cast" element={<CastFilm/>}/>
            <Route path="reviews" element={<ReviewsFilm/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
  );
};
