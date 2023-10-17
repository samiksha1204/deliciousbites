import React from "react";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Foot() {
  return (
    <div className="h-auto mt-20 bottom-0 md:h-12 rounded-b-xl p-4 md:p-2 lg:p-20 xl:p-[145px] text-write text-left flex items-center justify-between purple-gradient">
      <div className="h-auto   md:h-12 w-full rounded-xl md:p-[90px] bg-white p-2 flex items-center justify-between">
        <h1 className="font-bold text-xl md:text-sm">
          Stay Updated With Our Latest News
          <p className="font-normal text-sm md:text-base">
            Get our latest updates, news, offers, and much more directly to your
            inbox. <br />
            Subscribe and join our community.
          </p>
          <SubscribeForm />
        </h1>

        {/* Hide the image on small screens (sm:hidden) */}
        <div className="hidden sm:block ">
          <Image
            src="/image/fooddelivery.png"
            alt="deliveryfooter"
            width={200}
            height={200}
            blurDataURL="data:..."
            placeholder="blur"
            className=" hover:translate-x-[5rem]"
          />
        </div>
      </div>
    </div>
  );
}
