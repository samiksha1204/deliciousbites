import React from "react";
import Menus from "./Menus";
import Link from "next/link";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "MENU", url: "/" },
  { id: 3, title: "ABOUT", url: "/" },
  { id: 4, title: "CONTACT", url: "/" },
];
const User = false;

export default function Nav() {
  return (
    <div className="h-12 sm:h-6 m-10 text-write p-4 sm:p-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link href="/">DeliciousBites</Link>

      {/* Navigation Links (Visible on Medium Screens and Larger) */}
      <div className="hidden md:flex gap-4  text-14 ml-auto">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
        {!User ? (
          <Link href="/login">LOGIN</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
      </div>

      {/* Mobile View */}
      <div>
        <Menus />
      </div>
    </div>
  );
}
