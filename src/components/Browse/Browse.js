import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchLatestMovies } from "../../API/fetchLateshMovies";
import { setMovies } from "../../slices/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch movies and set them in the Redux store
    fetchLatestMovies()
      .then((movies) => {
        dispatch(setMovies(movies));
      })
      .catch((error) => console.error("Error fetching movies:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
