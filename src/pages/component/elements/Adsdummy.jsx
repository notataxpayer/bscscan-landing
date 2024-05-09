import React from "react";

const Adsdummy = () => {
  return (
    <div className="text-white flex-row flex font-Roboto">
      <div className="absolute right-16 bottom-24 bg-white border-2 rounded-md text-black p-1 text-xl">
        Ads
      </div>
      <div className="flex-col bg-blue-600 p-4 rounded-l-md">
        <div className="flex text-xl font-semibold">Gate.io</div>
        <div className="font-bold text-xl flex">
          Trade over <br />
          <span className="text-green-400 pl-1">1700+</span> cryptos
        </div>
        <div className="flex font-semibold text-sm pt-1">
          safely, quickly and easily
        </div>
      </div>
      <div className="bg-blue-800 p-4 rounded-r-md ">
        <button className="py-2 px-12 rounded-md outline-none bg-blue-cust mt-6 hover:bg-blue-400 hover:duration-500 font-bold">
          sign up
        </button>
      </div>
    </div>
  );
};

export default Adsdummy;
