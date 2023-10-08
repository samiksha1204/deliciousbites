import React from "react";
import Menus from "./Menus";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="h-12 text-write p-4 flex m-20 items-center justify-between">
      {/* LOGO */}
      <div>
        <Link href="/">DeliciousBites</Link>
      </div>

      {/* Mobile View*/}
      <div>
        <Menus />
      </div>
    </div>
  );
}
