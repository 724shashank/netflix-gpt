import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer = ()=>{
const movie = useSelector((store)=>store?.movieData?.nowPlayingMovies);
if(!movie) return;
const mainMovie = movie[1];
const {original_title,overview,id}= mainMovie;

    return <>
      <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview} />  
      <VideoBackground vid={id}/>
      </div>
    </>
}

export default MainContainer;