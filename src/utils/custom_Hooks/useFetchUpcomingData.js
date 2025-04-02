import { useEffect } from "react";
import { option } from "../constants";
import { addUpcomingData } from "../redux/slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const useFetchUpcomingData = () => {
  const FetchUpcomingData = useSelector((store)=>store.movieData.upComingData)

  const options = option;
  const url = process.env.Upcoming_Movies_URL;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addUpcomingData(data?.results))
            
    } catch (err) {
      (`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    !FetchUpcomingData && fetchApi();
   
  }, []);

};

export default useFetchUpcomingData;
