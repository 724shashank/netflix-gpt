import { ArrowPathIcon } from "@heroicons/react/24/outline";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
    <ArrowPathIcon className="h-6 w-6 animate-spin text-white" />
    </div>
  );
};

export default LoadingSpinner;