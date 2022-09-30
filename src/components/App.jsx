
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom"



const MainElement = lazy(() => import("./MainElement/MainElement"));
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesCard = lazy(() => import("./MoviesDatails/MuviesCard/MoviesCard"));
const Cast = lazy(() => import("./MoviesDatails/Cast/Cast"));
const Reviews = lazy(() => import("./MoviesDatails/Reviews/Reviews"))


export const App = () => {
  return (
    
    <>
    <Suspense fallback={<h2>Loading Page</h2>}>
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
