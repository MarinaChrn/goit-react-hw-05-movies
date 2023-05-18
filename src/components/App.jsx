import { Loading } from "./Loading";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(()=> import("../pages/Home"));
const CastFilm = lazy(()=> import("./CastFilm"));
const SharedLayout = lazy(()=> import("./SharedLayout"));
const AboutFilm = lazy(()=> import("../pages/AboutFilm"));
const Movies = lazy(()=> import("../pages/Movies"));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path='/movies' element={<Movies />} />
          <Route path="/movies/:moviesId" element={<AboutFilm/>}>
            <Route path="cast" element={<CastFilm/>}/>
            {/* <Route path="reviews" element={<ReviewsFilm/>}/> */}
          </Route>
        </Route>
      </Routes>
    </Suspense>
    
  );
};
