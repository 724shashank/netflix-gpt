import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ posterPath, rating }) => {
  return (
    <>
      <div className="w-50 pr-4">
        <img src={IMG_CDN + posterPath} alt="Movie Poster" />

        <h1>{rating}</h1>
      </div>
    </>
  );
};

export default MovieCard;
