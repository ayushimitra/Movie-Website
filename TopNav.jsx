import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

const TopNav = () => {
    const [query , setquery] = useState(""); 
    const [searches , setsearches]= useState([]); 

    const GetSearches = async () =>{
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);
            console.log(data);
            setsearches(data.results);
        } catch (error) {
            console.log("Error:", error);
        }
    };
      useEffect(() => {
        GetSearches();
    },[query]);

    return (
    <div className="w-[80%] h-[10vh] relative flex justify-start items-center ml-[15%]">
        <i className ="text-zinc-400 text-3xl ri-search-line"></i>
        <input  
          onChange={(e)=> setquery(e.target.value)}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type ="text" 
        placeholder="Search anything"
        />
        {query.length>0 &&(
            <i onClick ={() => setquery("")}
            class ="text-zinc-400 text-3xl ri-close-fill"></i>
        )}
        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[100%] left-[5%] overflow-auto">
            {searches.map((s,i) => (
            <Link 
            key={i}
            className="hover:text-black hover:bg-zinc-300 font-semibold 
            text-zinc-600 inline-block p-10  w-[100%] flex justify-start
             items-center border-b-2 border-zinc-100">
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-5"
            src={`https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path
            }`} 
            alt=""/>        
            <span>{s.name || s.title ||  s.original_name || s.original_title}</span>
            </Link>
            ))}
            </div>
            </div>
    );
};
export default TopNav; 