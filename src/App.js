import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
const App = () => {
  return (
    <div className=" flex flex-col w-[100vw] justify-center items-center bg-gray-200 h-[100vh] overflow-x-hidden">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Testimonials</h2>

        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"> </div>

        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
