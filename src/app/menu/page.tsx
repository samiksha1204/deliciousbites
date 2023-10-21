import { pizzas } from "imp/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-write">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 group rounded-md  odd:bg-fuchsia-50 flex flex-col justify-between"
          href={`/product/${item.id}`}
          key={item.id}
        >
          <div className="relative h-[80%]">
            {item.img && (
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain hover:rotate-[360deg] transition-all duration-500"
              />
            )}
          </div>
          <div className="flex items-center justify-between gap-2 font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group:hover-hidden text-xl p-2">
              Rs. {item.price.toFixed(2)}
            </h2>
            <button className="rounded-md group-hover:block m-2 bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-texts">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
