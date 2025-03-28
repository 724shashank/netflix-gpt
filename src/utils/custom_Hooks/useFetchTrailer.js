import { useState,useEffect } from "react";
import { option } from "../constants";
const useFetchTrailer = (vid) => {
  const [videoKey, setvideoKey] = useState("");

  const getVideos = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${vid}/videos`,
        option
      );
      const data = await res.json();
      
     

      const filteredData = data?.results?.filter(
        (video) => video?.type === "Trailer" || video?.type === "Teaser"
      );
      if (filteredData?.length > 0) {
        setvideoKey(filteredData[0]?.key);
      }
    } catch (error) {
      console.log("Error Encountered:", error.message);
    }
  };

  useEffect(() => {
    getVideos();
  }, [vid]);

  return videoKey;

};

export default useFetchTrailer;
