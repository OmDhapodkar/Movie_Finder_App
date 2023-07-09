import { movie } from "../assets";

const MovieItem = ({ movie, onSelect }) => {
  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div
      onClick={() => onSelect(imdbID)}
      className="flex flex-col m-2 p-3 border-2 border-white rounded-xl cursor-pointer hover:scale-[1.01] w-[300px] bg-black"
    >
      <img src={Poster} alt="movie" className="w-[280] bg-cover h-[350px]" />
      <div className="flex flex-col my-2 text-white">
        <h3 className=" overflow-hidden text-ellipsis whitespace-nowrap text-xl">
          {Title}
        </h3>
        <div className="flex justify-between text-gray-400">
          <span>Year : {Year}</span>
          <span>Type : {Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
