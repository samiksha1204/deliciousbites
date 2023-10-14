"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
import Cart from "./Cart";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "MENU", url: "/" },
  { id: 4, title: "CONTACT", url: "/" },
];
const User = false;

const Menus: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(!open);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Show the menu icon only on mobile devices */}
      <button onClick={handleOpenClick} className="md:hidden">
        {open ? <CiMenuFries /> : <CiMenuKebab />}
      </button>

      {open && (
        <div className="absolute h-auto top-5 right-0 bg-gray-200 p-4 shadow-md flex flex-col gap-4 items-center justify-center min-w-full z-index-2 text-sm md:hidden">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!User ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <Cart />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menus;
