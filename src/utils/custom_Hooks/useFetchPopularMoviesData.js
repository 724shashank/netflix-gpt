import { useEffect } from "react";
import { option } from "../constants";
import { addPopularMovieData } from "../redux/slices/movieSlice";
import { useDispatch } from "react-redux";

const useFetchPopularMoviesData = () => {


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
    fetchApi();
   
  }, []);

};

export default useFetchPopularMoviesData;
