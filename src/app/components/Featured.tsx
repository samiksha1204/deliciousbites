import React from "react";
import Image from "next/image";
import { featuredProducts } from "imp/data";
export default function () {
  return (
    <div className="w-screen overflow-x-scroll text-write">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4"
          >
            {item.img && (
              <div className="relative flex-1 w-full">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p>{item.desc}</p>
              <span className="text-xl font-bold">
                {item.price}
                <button className="bg-texts text-write p-2 rounded-md">
                  ADD
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
