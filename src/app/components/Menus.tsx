"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "MENU", url: "/" },
  { id: 3, title: "ABOUT", url: "/" },
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
        <div className="absolute h-auto top-5 right-0  p-4 shadow-md flex flex-col gap-4 items-center justify-center min-w-full z-index-2 text-sm md:hidden">
          {links.map((item) => (
            <Link href={item.url} key={item.id}>
              {item.title}
            </Link>
          ))}
          {!User ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Menus;
