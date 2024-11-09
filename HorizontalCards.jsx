import React from "react";
import Dropdown from "./Dropdown"
const HorizontalCards = ({ data }) => {  // Accept data as a prop
  return (
    <div className="w-full p-5">
      <div className="mb-5 flex justify-between">
        
        <h1 className="text-3xl font-semibold text-zinc-400">
            Trending</h1>
            <Dropdown title="Filter" options={["tv","movie","all"]}  />
            </div>
            <div className="w-[100%] flex overflow-x-auto">
            {data.map((d, i) => (

            <div key={i} className="min-w-[15%] bg-zinc-900 mr-5">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}  // Removed extra comma
              alt={d.title || d.name || "Movie/Show Image"}
            />
            <div className="text-white">
              <h1 className="mt-3 text-xl font-semibold text-white">
                {d.title ||
                 d.name || 
                 d.original_name ||
                  d.original_title}
              </h1>
              <p className="text-white">
                {d.overview ? `${d.overview.slice(0,50)}...` : "No description available."} {/* Handle missing overview */}
                <span className="text-zinc-500"> more</span>
              </p>
            </div>
           </div>
            ))}
           </div>
            </div>
  )
};

export default HorizontalCards;



