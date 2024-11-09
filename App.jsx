import {Route,Routes } from "react-router-dom"
import Home from "./Components/Home";
import "./index.css"
import Trending from "./Components/partials/Trending";
import Popular from "./Components/partials/popular";
import Movies from "./Components/partials/Movies";
import TvShows from "./Components/partials/TvShows";
import People from "./Components/partials/People";
function App(){
  return<div className="bg-[#1F1E24] w-full h-screen flex">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/tv" element={<TvShows/>}/>
      <Route path="/people" element={<People/>}/>
    </Routes>
  </div>;
};
export default App; 