import React from "react";
import Hero from "./component/Latest_Blocks";
import Searchcomp from "./component/Searchcomp";
import Latest_Transaction from "./component/Latest_Transaction";

const Home = () => {
  return (
    <div>
      <Searchcomp />
      <div className="flex flex-row justify-between items-center">
        <Hero />
        <Latest_Transaction />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Hero />
        <Latest_Transaction />
      </div>
    </div>
  );
};

export default Home;
