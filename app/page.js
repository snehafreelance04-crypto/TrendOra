import Image from "next/image";
import Logo_Name from "@/Components/Logo_Name";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#C9E7FF] via-[#FDE2FF] to-[#FFD6A5] min-h-screen">

        <Logo_Name />

        {/* Buttons Top-Right */}
        <div className="absolute top-4 right-4 flex gap-3">

          {/* Login */}
          <Link href="/login">
            <button
              type="button"
              className="
    text-heading bg-gradient-to-r from-violet-300 to-pink-300 
    font-bold rounded-full text-sm px-6 py-2.5 text-center leading-5
    shadow-md transition-all duration-10
    hover:scale-105 hover:font-extrabold cursor-pointer"
            >
              Login
            </button>

          </Link>

          {/* Signup */}
          <Link href="/signup">
            <button
              type="button"
              className="
    text-heading bg-gradient-to-r from-violet-300 to-pink-300 
    font-bold rounded-full text-sm px-6 py-2.5 text-center leading-5
    shadow-md transition-all duration-10
    hover:scale-105 hover:font-extrabold cursor-pointer"
            >
              Sign Up
            </button>

          </Link>

        </div>
        <div className="flex items-center justify-center py-16 px-6">
          <h1 className="text-center text-3xl md:text-7xl w-[90%] text-[#6e6255] tracking-wide absolute">
            Explore AI-Smart Deals & Personalized Picks
          </h1>
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="
      px-14 py-6 flex items-center gap-4
      text-2xl font-semibold
      rounded-full
      text-black
      bg-gradient-to-br from-[#d5dae6] via-[#ce3e9e] to-[#312E81]
      shadow-[0_8px_20px_rgba(255,150,100,0.45)]
      hover:shadow-[0_8px_26px_rgba(255,150,100,0.60)]
      hover:scale-105 active:scale-95
      transition-all duration-50 hover:text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 8V6a6 6 0 1112 0v2m-9 4h6m-9 8h12a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <Link href="/shopping"> Start Shopping </Link>
          </button>
        </div>

      </div>
    </>
  );
}
