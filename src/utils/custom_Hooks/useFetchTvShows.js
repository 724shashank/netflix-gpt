import { useEffect } from "react";
import { option } from "../constants";
import { addTVShowsData } from "../redux/slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const useFetchTvShows = () => {
  const FetchTvShows = useSelector((store)=>store.movieData.tvShowsData)

  const options = option;
  const url = process.env.Top_TV_Shows;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addTVShowsData(data?.results))
            
    } catch (err) {
      (`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    !FetchTvShows && fetchApi();
   
  }, []);

};

export default useFetchTvShows;
