import { useEffect } from "react";
import { option } from "../constants";
import { addTVShowsData } from "../redux/slices/movieSlice";
import { useDispatch } from "react-redux";

const useFetchTvShows = () => {


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
    fetchApi();
   
  }, []);

};

export default useFetchTvShows;
