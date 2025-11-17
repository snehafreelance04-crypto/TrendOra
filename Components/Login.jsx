"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (!email || !pass) return alert("Fill both fields!");

    setPopup(true);

    setTimeout(() => {
      router.push("/");
    }, 1000);
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

      {/* MAIN WRAPPER */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 relative">

        {/* SUCCESS POPUP */}
        {popup && (
          <div className="
            absolute inset-0 flex items-center justify-center
            animate-[pop_0.35s_ease-out] z-50
          ">
            <div className="
              bg-white w-[85%] sm:w-[350px] p-6 sm:p-8 rounded-xl shadow-xl text-center
            ">
              <h2 className="text-xl sm:text-2xl font-bold">Login Successful!</h2>
            </div>
          </div>
        )}

        {/* LOGIN BOX */}
        <div className={`
          bg-white w-[90%] sm:w-[380px] p-6 sm:p-8 rounded-xl shadow-lg transition
          ${popup ? "blur-sm pointer-events-none" : ""}
        `}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Login
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD + SHOW BUTTON */}
          <div className="relative mb-5">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2 
                text-xs sm:text-sm text-purple-600
              "
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            className="
              w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-purple-500 to-pink-500
              transition-transform hover:scale-105 active:scale-95
            "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
