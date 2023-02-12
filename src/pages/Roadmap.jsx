import React from "react";

const Roadmap = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="grid w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-400">SOCIALink</span> Roadmap
        </h1>
        <p className="text-xl font-medium">Coming soon...</p>
        <button className="pl-4 pr-4 pt-2 pb-2 bg-gray-200 rounded-3xl mt-8" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
