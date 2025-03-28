import Header from "./Header";
import useFetchData from "../utils/custom_Hooks/useFetchData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMoviesData from "../utils/custom_Hooks/useFetchPopularMoviesData";

const Browse = () => {
  useFetchData();
  useFetchPopularMoviesData();


  

  return (
    <>
      <Header />
     <MainContainer/>
     <SecondaryContainer/>
    </>
  );
};

export default Browse;
