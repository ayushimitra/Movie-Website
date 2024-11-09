import React from "react";
import { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import TopNav from "./partials/TopNav";
import axios from "./partials/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
const Home=()=>{
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  console.log(wallpaper);
  useEffect(() => {
    if(!wallpaper) GetHeaderWallpaper(); 
    if (!trending) GetTrending();
  }, []);
  
  console.log(trending);
  return wallpaper && trending ? (
<>
<Sidenav/>
<div className="w-[80%] h-full overflow-auto overflow-x-hidden">
<TopNav />
<Header data={wallpaper}/>
<HorizontalCards data = {trending}/>
</div>
</>
    ):<h1>Loading</h1>
}
export default Home;