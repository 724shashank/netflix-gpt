import Header from "./Header";
import useFetchData from "../utils/custom_Hooks/useFetchData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchData();

  

  return (
    <>
      <Header />
     <MainContainer/>
     <SecondaryContainer/>
    </>
  );
};

export default Browse;
