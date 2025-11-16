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

    // AUTO REDIRECT AFTER 3 SECONDS
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">

        {popup && (
          <div className="absolute top-1/2 left-1/2 
                          -translate-x-1/2 -translate-y-1/2 
                          animate-[pop_0.35s_ease-out] z-50">
            <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl font-bold text-black">Login Successful!</h2>
            </div>
          </div>
        )}

        <div className={`max-w-sm w-full bg-white p-6 rounded-xl shadow-lg transition ${popup ? "blur-sm" : ""}`}>
          <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-600 "
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={login}
            className="w-full py-3 border border-black rounded-lg bg-gradient-to-r from-purple-500 to-pink-500  text-white font-semibold hover:scale-105 transition cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
