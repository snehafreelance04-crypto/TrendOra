"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
    if (!validatePassword(pass))
      return alert(
        "Weak Password! Must include 3 numbers, 1 uppercase, 1 special symbol & 4 letters."
      );

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
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatReverse {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes tagSwing {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(6deg); }
        }

        .glass-card {
          backdrop-filter: blur(7px);
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .shimmer-line {
          background: linear-gradient(90deg,
            rgba(168,80,247,.5),
            rgba(236,72,153,.6),
            rgba(168,80,247,.5)
          );
          animation: shimmer 3s linear infinite;
          background-size: 2000px 100%;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 sm:p-6 flex items-center justify-center relative overflow-hidden">

        {/* Background shapes same as login */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 opacity-40 blur-2xl rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 opacity-40 blur-2xl rounded-full animate-[floatReverse_9s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-400 opacity-40 blur-2xl rounded-full animate-[float_6s_ease-in-out_infinite]"></div>

        {/* Ecommerce icons same style as login */}
        <div className="absolute top-[28%] right-[14%] text-7xl opacity-70 animate-[float_6s_ease-in-out_infinite]">🛒</div>
        <div className="absolute top-[45%] left-[12%] text-7xl opacity-70 animate-[float_7s_ease-in-out_infinite]">🛍️</div>
        <div className="absolute top-[50%] right-[9%] text-7xl opacity-70 animate-[tagSwing_3s_ease-in-out_infinite]">🏷️</div>
        <div className="absolute bottom-[32%] left-[10%] text-7xl opacity-70 animate-[floatReverse_8s_ease-in-out_infinite]">🎁</div>

        {/* SUCCESS POPUP SAME STYLE AS LOGIN */}
        {popup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div className="bg-white w-[85%] sm:w-[350px] p-6 rounded-2xl shadow-2xl text-center animate-[pop_0.35s_ease-out] border-4 border-green-400">
              <div className="text-6xl mb-3">✓</div>
              <h2 className="text-xl font-bold text-green-600">Signed Up Successfully!</h2>
              <p className="text-gray-600 mt-2">Redirecting...</p>
            </div>
          </div>
        )}

        {/* SIGNUP CARD */}
        <div
          className={`glass-card w-[90%] sm:w-[380px] p-6 sm:p-8 rounded-2xl shadow-2xl animate-[fadeInUp_0.8s_ease-out]
          ${popup ? "blur-sm pointer-events-none" : ""}`}
        >
          <div className="shimmer-line h-1 rounded-full mb-6"></div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faUserPlus} className="text-purple-600 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"><u>Sign Up</u></span>
          </h2>

          {/* INPUTS MATCH LOGIN STYLE */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition"
            value={name}
            onChange={handleName}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-6">
            <input
              type={show ? "text" : "password"}
              placeholder="Create Password"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-900"
            >
              {show ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>

          <button
            onClick={signup}
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:text-black transition relative overflow-hidden group"
          >
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
