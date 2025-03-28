import { useEffect, useState } from "react";
import { option } from "../constants";
import { addMovieData } from "../redux/slices/movieSlice";
import { useDispatch } from "react-redux";

const useFetchData = () => {


  const options = option;
  const url = process.env.API;
  const dispatch = useDispatch();


  const fetchApi = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(addMovieData(data?.results))
            
    } catch (err) {
      setError(`Error Encountered: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchApi();
   
  }, []);

};

export default useFetchData;
