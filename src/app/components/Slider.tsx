"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/image/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are",
    image: "/image/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/image/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}

      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-write font-bold">
        <div className="absolute top-60  w-80 h-80 hidden sm:block bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-70  w-80 h-80 hidden sm:block bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <h1 className="text-5xl text-center uppercase p-4 md:p-20 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="rounded-md text-5xl md:text-2xl  sm:text-2xl text-center items-center justify-center flex text-red-500 px-4 py-2 font-semibold shadow-sm hover:text-texts">
          <IoFastFoodSharp />
          <span className="text-center text-3xl md:text-xl">Order</span>
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1  relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Slider;
