import React from "react";
import Searchbar from "./elements/Searchbar";
import Adsdummy from "./elements/Adsdummy";

const Searchcomp = () => {
  return (
    <div className="font-roboto bg-black py-12 pl-12 flex-row">
      <div className="">
        <div className="text-white flex font-semibold pb-4 pt-2 pl-2 text-2xl">
          BNB Smart Chain Explorer
        </div>
        <Searchbar />
        <div className="text-white flex pt-3 pl-1 text-xl">
          <span className="text-gray-300 font-semibold">Sponsored: </span>
          <a className="flex pl-2">
            <img
              className="h-6 w-6 mt-1 pointer-events-none pl-1"
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1715232949/bscscan/blockdag_20.png_nug3z0.png"
              alt=""
            />
            <span className="pl-1 text-gray-300 font-semibold flex">
              BlockDAG
            </span>
            <span className="pl-2 text-md text-gray-400">
              Layer 1 presale is LIVE!
            </span>
            <span className="pl-1 text-blue-cust font-semibold">
              Watch Keynote
            </span>
          </a>
        </div>
      </div>
      <div className="absolute right-56 top-24">
        {/* <Adsdummy /> */}
        <a className="absolute text-black text-md font-semibold rounded-md bg-white px-2 py-1 bottom-28 right-2">
          Ad
        </a>
        <img
          className="pointer-events-none h-32 w-100"
          src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1715235716/bscscan/gateio_321x101_april24.png_ndak66.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Searchcomp;
