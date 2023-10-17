"use client";

import { featuredProducts } from "imp/data";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNext = () => {
    if (currentIndex < featuredProducts.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-[96vw]  text-write">
      <h2 className="text-3xl m-10 ml-2 font-bold text-center uppercase text-write relative">
        Explore Our Highlighted Product Selection
        <BsArrowBarLeft
          onClick={showPrev}
          className="absolute hover:text-write text-red-500  left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
        <BsArrowBarRight
          onClick={showNext}
          className="absolute hover:text-write text-red-500  -right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </h2>

      {/* WRAPPER */}
      <div className="w-[95vw] item-center justify-center flex overflow-block">
        {featuredProducts.slice(currentIndex, currentIndex + 3).map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-2 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[32vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full m-5 hover:rotate-[360deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 hover:bg-texts text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
