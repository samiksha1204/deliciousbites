import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] text-write rounded-xl md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl bg-red-100 rounded-xl flex flex-col items-center justify-center md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/image/food.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex bg-red-100 flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">
            Welcome To DelicioudBites
          </h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <BsGoogle />
            <Link href="https://accounts.google.com/">
              <span>Sign in with Google</span>
            </Link>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <BsFacebook />
            <Link href="https://www.facebook.com/login/">
              <span>Sign in with Facebook</span>
            </Link>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
