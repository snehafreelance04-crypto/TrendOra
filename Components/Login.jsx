"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faRightToBracket,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (!email || !pass) return alert("Fill both fields!");

    // ✅ FIXED: Store in sessionStorage with correct key name
    sessionStorage.setItem("loginStatus", "true");
    sessionStorage.setItem("userEmail", email);

    setPopup(true);

    // small animation delay
    setTimeout(() => {
      router.push("/shopping"); // go to shopping page
    }, 500);
  };

  return (
    <>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-15px) rotate(5deg); }
          66% { transform: translateY(10px) translateX(15px) rotate(-5deg); }
        }
        @keyframes cartSlide {
          0% { transform: translateX(-100vw) translateY(0); }
          50% { transform: translateX(50vw) translateY(-20px); }
          100% { transform: translateX(120vw) translateY(0); }
        }
        @keyframes packageBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes tagSwing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .shimmer-bg {
          background: linear-gradient(90deg, 
            rgba(168, 85, 247, 0.4) 0%, 
            rgba(236, 72, 153, 0.6) 50%, 
            rgba(168, 85, 247, 0.4) 100%);
          background-size: 2000px 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>

      {/* PAGE WRAPPER */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 sm:p-6 relative overflow-hidden">
        
        {/* Animated Background Shapes - More Visible */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-[float_7s_ease-in-out_infinite]"></div>

        {/* E-commerce Icons Background Animations - More Visible & Colorful */}
        
        {/* Shopping Cart Animation */}
        <div className="absolute top-[25%] right-[13%] text-7xl drop-shadow-lg animate-[float_7s_ease-in-out_infinite]" style={{filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'}}>
          🛒
        </div>
      
        

        {/* Shopping Bags */}
        <div className="absolute top-[45%] left-[12%] text-7xl drop-shadow-2xl animate-[float_7s_ease-in-out_infinite]" style={{filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.7))'}}>
          🛍️
        </div>
       

        {/* Price Tags */}
        <div className="absolute top-[45%] right-[8%] text-7xl drop-shadow-xl animate-[tagSwing_3s_ease-in-out_infinite]" style={{filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.6))'}}>
          🏷️
        </div>
        

        {/* Credit Cards */}
        <div className="absolute top-[35%] left-[20%] text-6xl drop-shadow-lg animate-[float_8s_ease-in-out_infinite_2s]" style={{filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'}}>
          💳
        </div>
        

        {/* Gift Boxes */}
        <div className="absolute top-[55%] right-[22%] text-7xl drop-shadow-2xl animate-[packageBounce_6s_ease-in-out_infinite_2s]" style={{filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.7))'}}>
          🎁
        </div>
    

        {/* Back Button */}
        <Link
          href="/"
          className="bg-red-500 text-white absolute p-3 font-bold rounded-xl top-[8%] left-[10%] z-50
          hover:text-black hover:bg-red-300 "
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Dashboard
        </Link>

        {/* SUCCESS POPUP */}
        {popup && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-white bg-opacity-30 backdrop-blur-sm">
            <div className="bg-gray-100 w-[85%] sm:w-[350px] p-6 sm:p-8 rounded-2xl shadow-2xl text-center
            animate-[pop_0.35s_ease-out] border-4 border-green-400">
              <div className="text-6xl mb-4 animate-[pulse_0.5s_ease-in-out]">✓</div>
              <h2 className="text-xl sm:text-2xl font-bold text-green-600">Login Successful!</h2>
              <p className="text-gray-600 mt-2">Redirecting to shopping...</p>
            </div>
          </div>
        )}

        {/* LOGIN CARD */}
        <div
          className={`bg-white/90 backdrop-blur-lg w-[90%] sm:w-[380px] p-6 sm:p-8 rounded-2xl 
          shadow-2xl border border-gray-200 transition-all duration-500
          animate-[fadeInUp_0.8s_ease-out]
          ${popup ? "blur-sm pointer-events-none scale-95" : "hover:shadow-purple-200"}`}
        >
          {/* Decorative shimmer bar */}
          <div className="shimmer-bg h-1 w-full rounded-full mb-6"></div>
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faRightToBracket} className="text-purple-600 animate-[pulse_2s_ease-in-out_infinite]" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              <u>Login</u>
            </p>
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg text-sm sm:text-base 
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
            transition-all duration-300 hover:border-purple-300 hover:shadow-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <div className="relative mb-5">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-sm sm:text-base 
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
              transition-all duration-300 hover:border-purple-300 hover:shadow-md"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            {/* show/hide toggle */}
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-purple-600
              hover:text-purple-800 hover:scale-110 transition-all duration-200"
            >
              {show ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            className="w-full py-3 rounded-lg text-white font-semibold text-lg
            bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-size-200
            hover:bg-right  hover:text-black relative overflow-hidden group"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;