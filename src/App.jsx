import { useState } from "react";
import NavBar from "./components/NavBar";
import MovieContainer from "./components/MovieContainer";

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <div className="font-yasb">
      <NavBar setMovieList={setMovieList} />
      <MovieContainer movieList={movieList} />
    </div>
  );
}

export default App;
