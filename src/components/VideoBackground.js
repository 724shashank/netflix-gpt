import useFetchTrailer from "../utils/custom_Hooks/useFetchTrailer";

const VideoBackground = ({ vid }) => {
  const trailer = useFetchTrailer(vid);

  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&loop=1&playlist=${trailer}`} 
          allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
