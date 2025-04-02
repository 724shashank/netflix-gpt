import { useEffect } from "react";
import { option } from "../constants";
import { addPopularMovieData } from "../redux/slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const useFetchPopularMoviesData = () => {
  const FetchPopularMoviesData = useSelector((store)=>store.movieData.popularMovies)

  const options = option;
  const url = process.env.Popular_Movies_URL;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addPopularMovieData(data?.results))
            
    } catch (err) {
      (`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    !FetchPopularMoviesData && fetchApi();
   
  }, []);

};

export default useFetchPopularMoviesData;
