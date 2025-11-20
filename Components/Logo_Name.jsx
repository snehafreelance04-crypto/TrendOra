"use client"
import React from 'react'
import Image from 'next/image'

const Logo_Name = () => {
  return (
    <>
      <div className='flex items-center font-bold p-5 ml-[1rem] w-auto'>

        {/* Responsive Logo Image Wrapper */}
        <div className="w-[150px] h-[120px] md:w-[160px] md:h-[140px]">
          <Image
            src="/Images/Logo1.png"
            alt="logo"
            width={400}
            height={200}
            className="w-full h-full object-contain ml-[31px]"
          />
        </div>

        {/* TrendOra SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 120"
          width="400"
          height="130"
          className="ml-2 "
        >
          <defs>
            <linearGradient id="gradD" x1="0" y1="0" x2="4" y2="0">
              <stop offset="0%" stopColor="#FF6A6A" />
              <stop offset="33%" stopColor="#6E96FF" />
              <stop offset="66%" stopColor="#FFBC73" />
              <stop offset="100%" stopColor="#FF6A6A" />
            </linearGradient>
          </defs>

          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Poppins, sans-serif"
            fontWeight="800"
            fontSize="100"
            className="sm:text-[50px] md:text-[110px]"
            fill="url(#gradD)"
          >
            TrendOra
          </text>
        </svg>

      </div>
    </>
  )
}

export default Logo_Name
