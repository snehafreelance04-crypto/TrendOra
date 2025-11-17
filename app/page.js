import Link from "next/link";
import Logo_Name from "@/Components/Logo_Name";

export default function Home() {
  return (
    <>
      <div
        className="
          bg-gradient-to-br from-[#C9E7FF] via-[#FDE2FF] to-[#FFD6A5] 
          h-[112vh]
          w-[110%] md:w-[100%] 
          relative
        "
      >
        {/* Header Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 md:px-8 pt-3 md:pt-6">
          
          {/* Logo */}
          <div className="mb-3 sm:mb-0 scale-90 sm:scale-100">
            <Logo_Name />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 md:gap-4">
            {/* Login */}
            <Link href="/login">
              <button
                type="button"
                className="
                  text-heading bg-gradient-to-r from-violet-300 to-pink-300 
                  font-bold rounded-full 
                  text-sm sm:text-base md:text-sm 
                  px-6 py-2 sm:px-7 sm:py-2.5 md:px-6 md:py-2.5
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
                  text-sm sm:text-base md:text-sm 
                  px-6 py-2 sm:px-7 sm:py-2.5 md:px-6 md:py-2.5
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
        <div className="flex items-center justify-center px-3 sm:px-6 md:px-8 mt-12 sm:mt-24 md:mt-32 lg:mt-40">
          <h1
            className="
              text-center 
              text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold 
              text-[#6e6255]
              max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]
              leading-tight
            "
          >
            Explore AI-Smart Deals & Personalized Picks
          </h1>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8 sm:mt-16 md:mt-20 lg:mt-24 px-3">
          <Link href="/shopping">
            <button
              className="
                px-6 py-2.5 
                sm:px-10 sm:py-4 
                md:px-12 md:py-5
                lg:px-14 lg:py-6 
                flex items-center gap-2 sm:gap-3 md:gap-4
                text-sm sm:text-lg md:text-xl lg:text-2xl 
                font-semibold
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
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7"
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