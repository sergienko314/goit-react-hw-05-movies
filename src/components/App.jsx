
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom"



const MainElement = lazy(() => import("./MainElement"));
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesCard = lazy(() => import("./MoviesCard/Reviews"));
const Cast = lazy(() => import("./MoviesCard/Cast"));
const Reviews = lazy(() => import("../components/MoviesCard/Reviews"));


export const App = () => {
  return (
    
    <>
    <Suspense fallback={<h2>Loading CountryNewsPage</h2>}>
      <Routes>
        <Route path="/" element={<MainElement/>}>
          <Route index element={<Home/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};
