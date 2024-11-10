import React, { useEffect } from 'react';
import Header from '../Header';
import { useDispatch } from 'react-redux';
import { fetchLatestMovies } from '../../API/fetchLateshMovies';
import {
  setMovies,
  setPopularMovies,
  setTrendingMovies,
  setUpcomingMovies,
} from '../../slices/moviesSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { fetchPopularMovies } from '../../API/fetchPopularMovies';
import { fetchTrendingMovies } from '../../API/fetchTrendingMovies';
import { fetchUpcomingMovies } from '../../API/fetchUpcomingMovies';

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch movies and set them in the Redux store
    fetchLatestMovies()
      .then((movies) => {
        dispatch(setMovies(movies));
      })
      .catch((error) => console.error('Error fetching movies:', error));
    fetchPopularMovies()
      .then((movies) => {
        dispatch(setPopularMovies(movies));
      })
      .catch((error) => console.error('Error fetching movies:', error));
    fetchTrendingMovies()
      .then((movies) => {
        dispatch(setTrendingMovies(movies));
      })
      .catch((error) => console.error('Error fetching movies:', error));
    fetchUpcomingMovies()
      .then((movies) => {
        dispatch(setUpcomingMovies(movies));
      })
      .catch((error) => console.error('Error fetching movies:', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
