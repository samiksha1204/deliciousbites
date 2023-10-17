import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Cart from "./Cart";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "MENU", url: "/Menu" },
  { id: 4, title: "CONTACT", url: "/" },
];
const User = false;

export default function Nav() {
  const user = false;
  return (
    <div className="h-12 sm:h-6 m-10 hover:cursor-pointer group:hover-hidden text-red-500 p-4 sm:p-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link href="/">DeliciousBites</Link>

      {/* Navigation Links (Visible on Medium Screens and Larger) */}
      <div className="hidden md:flex gap-4 text-14 ml-auto">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Cart />
      </div>

      {/* Mobile View */}
      <div>
        <menu />
      </div>
    </div>
  );
}
