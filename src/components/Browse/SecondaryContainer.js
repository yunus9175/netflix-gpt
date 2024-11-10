import { useSelector } from 'react-redux';
import MovieList from '../MovieList';
import { memo } from 'react';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pb-4">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Trending'} movies={movies.trendingMovies} />
          <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies} />
        </div>
        <p className="text-white text-right px-2 mr-4">Developed by Yunus</p>
      </div>
    )
  );
};
export default memo(SecondaryContainer);
