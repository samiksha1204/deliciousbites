import React from "react";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS base styles

export default function Notifications() {
  return (
    <div>
      <div className="h-12 sm:h-6 cursor-pointer  purple-gradient rounded-t-xl flex items-center justify-center">
        <h1 className="text-center text-sm md:text-base text-write p-2">
          Free Delivery for all order above{" "}
          <span className="animate-pulse text-red-700 text-xl md:text-sm">
            Rs. 150
          </span>
          . Order your Food Now!
        </h1>
      </div>
    </div>
  );
}
