import React from "react";
import { useNavigate} from "react-router-dom"
import TopNav from "./TopNav";
import Dropdown from "./Dropdown";
const TvShows =()=>{
    const navigate =useNavigate();
    return(
        <div className="p-[3%] w-screen h-screen">
            <div className=" w-full flex items-center">
            <h1 className="text-2xl font-semibold text-zinc-400 ">
                <i onClick={()=>navigate(-1)}
                 className="hover:text-[#6556CD] ri-arrow-left-line"></i>
              TV Shows
                </h1>
                <div className="flex items-center w-[80%]" ></div>
                <TopNav />
                <Dropdown
                     title="category"
                     options={["movie","tv","all"]}
                     func=""
                     />
                   <div className="w-[2%]"></div>
                     <Dropdown
                     title="Duration"
                     options={["Week","Day"]}
                     func=""
                     />
        </div>

        


        </div>
    ); 
};
export default TvShows;