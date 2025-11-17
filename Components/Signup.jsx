"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleName = (e) => {
    const val = e.target.value;
    if (/^[A-Za-z ]*$/.test(val)) setName(val);
  };

  const validatePassword = (p) => {
    const nums = (p.match(/[0-9]/g) || []).length >= 3;
    const caps = /[A-Z]/.test(p);
    const spec = /[!@#$%^&*(),.?":{}|<>]/.test(p);
    const letters = (p.match(/[A-Za-z]/g) || []).length >= 4;
    return nums && caps && spec && letters;
  };

  const signup = () => {
    if (!name || !email || !pass) return alert("Fill all fields!");
    if (!validatePassword(pass)) return alert("Weak Password! Must include 3 numbers, 1 uppercase, 1 special symbol & 4 letters.");

    setPopup(true);
    setTimeout(() => router.push("/"), 1200);
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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 relative">

        {/* Popup */}
        {popup && (
          <div className="absolute inset-0 flex items-center justify-center z-50 animate-[pop_0.35s_ease-out]">
            <div className="w-[95%] max-w-[500px] bg-white p-6 sm:p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-lg sm:text-xl font-bold">Signed Up Successfully!</h2>
            </div>
          </div>
        )}

        {/* Form */}
        <div className={`w-[95%] max-w-[500px] bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition ${popup ? "blur-sm pointer-events-none" : ""}`}>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Sign Up</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 px-3 py-2 sm:px-4 sm:py-2.5 border rounded-lg text-sm sm:text-base"
            value={name}
            onChange={handleName}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-3 px-3 py-2 sm:px-4 sm:py-2.5 border rounded-lg text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Create Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border rounded-lg text-sm sm:text-base"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-purple-600"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={signup}
            className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
