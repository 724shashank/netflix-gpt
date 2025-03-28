import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer = ()=>{
const movie = useSelector((store)=>store?.movieData?.nowPlayingMovies);
if(!movie) return;
const mainMovie = movie[4];
const {original_title,overview,id}= mainMovie;

    return <>
      
      <VideoTitle title={original_title} description={overview} />  
      <VideoBackground vid={id}/>
    </>
}

export default MainContainer;