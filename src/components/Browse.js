import Header from "./Header";
import useFetchData from "../utils/custom_Hooks/useFetchData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMoviesData from "../utils/custom_Hooks/useFetchPopularMoviesData";
import useTopRatedData from "../utils/custom_Hooks/useTopRatedData";
import useFetchUpcomingData from "../utils/custom_Hooks/useFetchUpcomingData";
import useFetchTvShows from "../utils/custom_Hooks/useFetchTvShows";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const toggleButton = useSelector((store) => store.gpt.showGptSearch);
  useFetchData();
  useFetchPopularMoviesData();
  useTopRatedData();
  useFetchUpcomingData();
  useFetchTvShows();

  return (
    <>
      <Header />
      {!toggleButton ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GPTSearch />
      )}
    </>
  );
};

export default Browse;
