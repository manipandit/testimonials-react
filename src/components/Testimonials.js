import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = (props) => {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center 
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-3xl"
    >
      <Card review={reviews[index]} />

      <div
        onClick={leftShiftHandler}
        className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center"
      >
        <button className="cursor-pointer hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-5">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10
        py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
