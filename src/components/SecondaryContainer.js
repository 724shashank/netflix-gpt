import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const Data = useSelector((store) => store?.movieData?.nowPlayingMovies);
  const popular = useSelector((store) => store?.movieData?.popularMovies);
  const top = useSelector((store) => store?.movieData?.topRatedData);
  const upcoming = useSelector((store) => store?.movieData?.upComingData);
  const tvShows = useSelector((store) => store?.movieData?.tvShowsData);

  return (
    <>
      <div className="bg-black">
        <div className="mt-0 md:-mt-70 md:relative md:z-20">
          <MovieList title={"Top Rated"} movies={top} />
          <MovieList title={"Upcoming"} movies={upcoming} />
          <MovieList title={"Now Playing"} movies={Data} />
          <MovieList title={"Popular Movies"} movies={popular} />
          <MovieList title={"TV Shows"} movies={tvShows} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
