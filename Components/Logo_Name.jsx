import React from 'react'

const Logo_Name = () => {
  return (
    <div className='text-4xl font-bold p-5 mx-3 text-black w-[20%] '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 160" width="500" height="150">
  <defs>
    <linearGradient id="gradD" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF6A6A"/>
      <stop offset="33%" stop-color="#6Eg6FF"/>
      <stop offset="66%" stop-color="#FFBC73"/>
      <stop offset="100%" stop-color="#"/>
    </linearGradient>
  </defs>

  <text x="0" y="100"
        font-family="Montserrat, Poppins, sans-serif"
        font-weight="800"
        font-size="150"
        fill="url(#gradD)">
    TrendOra
  </text>
</svg>

    </div>
  )
}

export default Logo_Name
