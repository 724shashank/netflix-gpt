import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ posterPath}) => {
  if(!posterPath) return null ; 
  return (
    <>
      <div className="w-30 md:w-50 pr-4">
        <img src={IMG_CDN + posterPath} alt="Movie Poster" />
      </div>
    </>
  );
};

export default MovieCard;
