"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col justify-items-center space-y-5 m-5 p-5 ">
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Oh no! Something went wrong on that page!</span>
      </div>

      <p>{error.message}</p>

      <button
        className="bg-pink-300 text-black px-3 py-2 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
