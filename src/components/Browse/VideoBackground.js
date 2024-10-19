import React, { useEffect } from "react";
import { fetchMovieVideos } from "../../API/fetchMovieVideos";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerVideo } from "../../slices/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((movie) => movie?.movies.trailerVideo);

  useEffect(() => {
    fetchMovieVideos(movieId)
      .then((res) => {
        const filterData = res?.filter((mov) => mov?.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : res[0];
        dispatch(setTrailerVideo(trailer));
      })
      .catch((err) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-full  md:aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        a
      ></iframe>
    </div>
  );
};

export default VideoBackground;