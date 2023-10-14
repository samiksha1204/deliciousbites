import React from "react";

export default function SubscribeForm() {
  return (
    <div className="mt-6 flex gap-x-4 mb-6">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        style={{ width: "100px" }}
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-base sm:leading-2"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-texts px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button>
    </div>
  );
}
