import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4 no-scrollbar">
        <div className=" flex  justify-evenly ">
          {movies?.length > 0 ? (
            movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                rating={movie.average_rating}
                posterPath={movie.poster_path}
              />
            ))
          ) : (
            <p>No Data available...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
