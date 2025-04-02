import { useEffect } from "react";
import { option } from "../constants";
import { addMovieData } from "../redux/slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const useFetchData = () => {
 
  const FetchData = useSelector((store)=>store.movieData.nowPlayingMovies)

  const options = option;
  const url = process.env.API;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addMovieData(data?.results))
            
    } catch (err) {
      (`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    if(!FetchData)
      fetchApi();
   
  }, []);

};

export default useFetchData;
