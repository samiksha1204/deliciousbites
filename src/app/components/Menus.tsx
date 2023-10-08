"use client";
import Link from "next/link";
import { link } from "fs";
import React, { useState } from "react";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "MENU", url: "/" },
  { id: 3, title: "ABOUT US", url: "/" },
  { id: 4, title: "CONTACT US", url: "/" },
];
const User = false;
const Menus: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <div>
      {!open ? (
        <button onClick={handleOpenClick}>
          <CiMenuKebab />
        </button>
      ) : (
        <button onClick={handleCloseClick}>
          <CiMenuFries />
        </button>
      )}

      {!open && (
        <div className="text-write absolute right-40 top-50 flex flex-col  gap-4 items-end justify-center text-14 z-10">
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
