import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
const VideoTitle = ({ title, description }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[10%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-xl -mx-8 my-10 md:text-3xl md:font-bold ">{title}</h1>
        <p className="w-1/4 my-6 font-lg hidden md:inline-block">{description}</p>
        <div className="-my-9">
          <button className=" w-18  -ml-8 md:w-auto bg-white text-black flex items-center gap-2 p-1 m-1 md:p-3 md:m-3 rounded-lg hover:bg-[rgb(185,176,176)]">
            <PlayIcon className="w-6 md:h-6" />
            <span>Play</span>
          </button>

          <button className="hidden md:flex w-auto bg-[rgba(185,176,176,0.45)] text-white items-center gap-2 p-3 m-3 mx-2.5 rounded-lg hover:bg-[rgba(185,176,176,0.22)]">
  <InformationCircleIcon className="w-6 h-6" />
  <span>More Info</span>
</button>

        </div>
      </div>
    </>
  );
};

export default VideoTitle;
