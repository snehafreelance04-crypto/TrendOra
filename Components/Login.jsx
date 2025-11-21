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
      `}</style>

      {/* PAGE WRAPPER */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 relative">

        {/* Back Button */}
        <Link
          href="/"
          className="bg-red-500 text-white absolute p-3 font-bold rounded-xl top-[8%] left-[10%]
          hover:text-black hover:bg-red-300 transition-all"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Dashboard
        </Link>

        {/* SUCCESS POPUP */}
        {popup && (
          <div className="absolute inset-0 flex items-center justify-center animate-[pop_0.35s_ease-out] z-50">
            <div className="bg-white w-[85%] sm:w-[350px] p-6 sm:p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-xl sm:text-2xl font-bold">Login Successful!</h2>
            </div>
          </div>
        )}

        {/* LOGIN CARD */}
        <div
          className={`bg-white w-[90%] sm:w-[380px] p-6 sm:p-8 rounded-xl shadow-lg transition
          ${popup ? "blur-sm pointer-events-none" : ""}`}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faRightToBracket} className="text-blue-900" />
            <p className="text-blue-950">
              <u>Login</u>
            </p>
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base 
            focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <div className="relative mb-5">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            {/* show/hide toggle */}
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-900"
            >
              {show ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            className="w-full py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:scale-110 hover:shadow-xl active:scale-95 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;