import { useEffect } from "react";
import { option } from "../constants";
import { addTopRatedData } from "../redux/slices/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedData = () => {


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
    fetchApi();
   
  }, []);

};

export default useTopRatedData;
