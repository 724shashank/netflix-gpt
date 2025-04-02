import { useEffect } from "react";
import { option } from "../constants";
import { addTopRatedData } from "../redux/slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const useTopRatedData = () => {
  const TopRatedData = useSelector((store)=>store.movieData.topRatedData)

  const options = option;
  const url = process.env.Top_Movies_URL;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addTopRatedData(data?.results))
            
    } catch (err) {
      (`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    !TopRatedData && fetchApi();
   
  }, []);

};

export default useTopRatedData;
