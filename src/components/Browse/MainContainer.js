import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((movie) => movie?.movies?.nowPlayingMovies);
  if (movies[0]?.length === 0) return;
  const mainMovie = movies[10];

  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      {mainMovie && <VideoBackground movieId={mainMovie?.id} />}
    </div>
  );
};

export default MainContainer;
