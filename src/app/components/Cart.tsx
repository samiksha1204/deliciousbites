import React from "react";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/Hi";

export default function Cart() {
  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 hover:text-texts justify-center"
    >
      <div className="relative">
        <HiOutlineShoppingCart />
      </div>
      <span>(3)</span>
    </Link>
  );
}
