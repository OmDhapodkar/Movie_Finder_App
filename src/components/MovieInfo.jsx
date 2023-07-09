const MovieInfo = ({ movieInfo, onSelect }) => {
  const {
    Title,
    Year,
    Rated,
    Released,
    Poster,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Country,
    imdbRating,
    BoxOffice,
    Type,
  } = movieInfo;
  return (
    <div
      onClick={() => onSelect()}
      className="flex md:flex-row flex-col items-center bg-yellow-400 "
    >
      <img
        src={Poster}
        className=" h-[400px] bg-cover p-5"
        alt="movie-poster"
      />
      <div className="flex flex-col p-2">
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Movie : </h3>
          <p className=" p-2 text-gray-700">{Title}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Year : </h3>
          <p className=" p-2 text-gray-700">{Year}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Rated : </h3>
          <p className=" p-2 text-gray-700">{Rated}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Released on : </h3>
          <p className=" p-2 text-gray-700">{Released}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Genre : </h3>
          <p className=" p-2 text-gray-700">{Genre}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Director : </h3>
          <p className=" p-2 text-gray-700">{Director}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Actors : </h3>
          <p className=" p-2 text-gray-700">{Actors}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Languages : </h3>
          <p className=" p-2 text-gray-700">{Language}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Country : </h3>
          <p className=" p-2 text-gray-700">{Country}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">IMDB Rating : </h3>
          <p className=" p-2 text-gray-700">{imdbRating}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">Type : </h3>
          <p className=" p-2 text-gray-700">{Type}</p>
        </div>
        <div className="flex flow-row items-center">
          <h3 className=" text-lg font-semibold text-black">
            {" "}
            Box Office Collection :{" "}
          </h3>
          <p className=" p-2 text-gray-700">{BoxOffice}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className=" text-lg font-semibold text-black">Plot : </h3>
          <p className=" text-gray-700">{Plot}</p>
        </div>
      </div>
      <span className="relative text-white p-2 bg-black rounded-2xl mr-3 cursor-pointer">
        CLOSE
      </span>
    </div>
  );
};

export default MovieInfo;
