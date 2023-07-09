import MovieItem from "./MovieItem";
import MovieInfo from "./MovieInfo";
import { movie } from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";
const API_TOKEN = "e897a4f4";

const MovieContainer = ({ movieList }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_TOKEN}`)
      .then((response) => {
        setMovieInfo(response.data);
      });
  }, [selectedMovie]);
  return (
    <>
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          movieInfo={movieInfo}
          onSelect={setSelectedMovie}
        />
      )}
      <div className="flex flex-wrap gap-5 justify-center p-10 bg-blue-950 min-h-[calc(100vh-88px)] overflow-y-hidden">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieItem key={index} movie={movie} onSelect={setSelectedMovie} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center flex-1">
            <img src={movie} alt="movie" />
            <p className="text-white mt-2">Nothing to Show</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieContainer;
