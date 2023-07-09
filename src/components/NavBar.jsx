import { useState } from "react";
import { movie, search } from "../assets";
import axios from "axios";

const API_TOKEN = "e897a4f4";

const NavBar = ({ setMovieList }) => {
  const [term, setTerm] = useState("");
  const [timeOutId, changeTimeout] = useState();

  const fetchData = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      // No search term defined, return early
      return;
    }

    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_TOKEN}`
    );
    setMovieList(response.data.Search);
    console.log(response.data.Search[0]);
  };

  const textChange = (e) => {
    clearTimeout(timeOutId);
    setTerm(e.target.value);
    const timeout = setTimeout(() => {
      fetchData(e.target.value);
    }, 500);
    changeTimeout(timeout);
  };

  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center w-full bg-black p-3 items-center">
      <div className="flex items-center">
        <img src={movie} alt="movie" className="w-10 h-10" />
        <h1 className="text-white text-4xl p-3">React Movie Finder App</h1>
      </div>
      <div className="flex flex-row p-3 bg-white rounded-full items-center h-10 w-[350px]">
        <img src={search} alt="search" className="w-6 h-6" />
        <input
          type="text"
          value={term}
          onChange={textChange}
          className="outline-none border-none p-2 text-black font-semibold h-8 w-full"
          placeholder="Search Movies"
        />
      </div>
    </div>
  );
};

export default NavBar;
