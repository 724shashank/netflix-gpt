import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
const VideoTitle = ({ title, description }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-[rgba(240,236,236,0)] bg-gradient-to-r from-black">
        <h1 className="text-7xl font-bold">{title}</h1>
        <p className="w-1/4 my-6 font-lg">{description}</p>
        <div className="flex justify-">
          <button className="w-auto bg-white text-black flex items-center gap-2 p-3 m-3 rounded-lg hover:bg-[rgb(185,176,176)]">
            <PlayIcon className="w-6 h-6" />
            <span>Play</span>
          </button>

          <button className="w-auto bg-[rgba(185,176,176,0.45)] text-white flex items-center gap-2 p-3 m-3 mx-2.5 rounded-lg hover:bg-[rgba(185,176,176,0.22)]">
            <InformationCircleIcon className="w-6 h-6 " />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
