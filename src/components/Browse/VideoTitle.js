import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen md:aspect-video pt-[40%] md:pt-[12%] px-12 md:px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="py-5 text-lg w-full md:w-1/4">{overview}</p>
      <div className="flex gap-3 w-full md:w-1/2">
        <button className=" py-3 bg-white text-black w-1/3 font-bold rounded-lg hover:opacity-80 transition-all">
          {" "}
          ▶️ Play
        </button>
        <button className=" py-3 bg-slate-800 w-1/3 font-bold rounded-lg hover:bg-slate-700 transition-all">
          {" "}
          More Info
        </button>
      </div>
       
    </div>
  );
};

export default VideoTitle;
