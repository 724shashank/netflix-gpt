import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const Data = useSelector((store) => store?.movieData?.nowPlayingMovies);
  const popular = useSelector((store) => store?.movieData?.popularMovies);
  return (
    <>
     <div className="bg-black">
     <div className="-mt-70 relative z-20">
        <MovieList title={"Now Playing"} movies={Data} />
        <MovieList title={"Popular Movies"} movies={popular} />
        <MovieList title={"Now Playing"} movies={Data} />
        <MovieList title={"Now Playing"} movies={Data} />
        <MovieList title={"Now Playing"} movies={Data} />
        </div>
        </div>
    </>
  );
};

export default SecondaryContainer;
