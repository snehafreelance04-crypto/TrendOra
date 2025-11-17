import Link from "next/link";
import Logo_Name from "@/Components/Logo_Name";

export default function Home() {
  return (
    <>
      <div
        className="
          bg-gradient-to-br from-[#C9E7FF] via-[#FDE2FF] to-[#FFD6A5] 
          min-h-screen 
          w-[70rem] h-[150rem]
        "
      >

        <div className="w-full flex  items-center px-0 pt-0 md:px-0 md:scroll-pt-64">

          <div className="md:ml-4">
            <Logo_Name />
          </div>

          {/* Buttons Top-Right */}
          <div className="md:absolute top-4 right-4 flex gap-2 md:gap-3">

            {/* Login */}
            <Link href="/login">
              <button
                type="button"
                className="
                  text-heading bg-gradient-to-r from-violet-300 to-pink-300 
                  font-bold rounded-full 
                  text-5xl px-5 py-2 md:text-sm md:px-6 md:py-2.5
                  shadow-md transition-all
                  hover:scale-105 hover:font-extrabold cursor-pointer
                "
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
                  font-bold rounded-full 
                  text-5xl px-5 py-2 md:text-sm md:px-6 md:py-2.5
                  shadow-md transition-all
                  hover:scale-105 hover:font-extrabold cursor-pointer
                "
              >
                Sign Up
              </button>
            </Link>

          </div>
        </div>

        {/* HERO TEXT */}
        <div className="flex items-center justify-center py-20 px-6 md:py-16">
          <h1
            className="
            mt-96  text-center text-7xl h-7 md:text-7xl mb-10 mr-20 font-bold md:w-[90%] text-[#6e6255]  md:absolute
            "
          >
            Explore AI-Smart Deals & Personalized Picks
          </h1>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16 md:mt-12 px-4">
          <Link href="/shopping">
            <button
              className="
                px-30 py-7 mt-10 md:px-14 md:py-6 flex items-center md:gap-4 text-5xl md:text-2xl font-semibold
                rounded-full
                text-black
                bg-gradient-to-br from-[#d5dae6] via-[#ce3e9e] to-[#312E81]
                shadow-[0_8px_20px_rgba(255,150,100,0.45)]
                hover:shadow-[0_8px_26px_rgba(255,150,100,0.60)]
                hover:scale-105 active:scale-95
                transition-all duration-75 hover:text-white cursor-pointer
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-13 h-25 mr-4 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 8V6a6 6 0 1112 0v2m-9 4h6m-9 8h12a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Start Shopping
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}