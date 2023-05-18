import { AboutFilm } from "pages/AboutFilm";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./Loading";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />}>
            
          </Route>
          <Route path='/movies' element={<Movies />} />
          <Route path="/movies/:moviesId" element={<AboutFilm/>}/>
        </Route>
      </Routes>
    </Suspense>
    
  );
};
