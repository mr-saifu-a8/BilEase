import React from "react";
import { GoPerson } from "react-icons/go";
export default function Login() {
  return (
    <div className="w-full">
      <div className=" bg-white h-[100vh] lg:flex md:flex overflow-hidden">
        <div className="bg-black h-45 lg:h-full lg:w-[50vw] md:h-full md:w-[50vw] flex flex-col items-center justify-center">
          <svg className="absolute top-45 lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000"
              fill-opacity="1"
              d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,106.7C672,64,768,32,864,16C960,0,1056,0,1152,26.7C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <span className="text-white text-7xl">
            <GoPerson />
          </span>
        </div>

        {/* Login content */}
        <div className="px-6 lg:w-[50vw] md:w-[50vw] pt-10 pb-8">
          <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

          <label className="block text-sm font-semibold mb-2">E-mail</label>
          <input
            type="email"
            placeholder="Hello@dream.com"
            className="w-full px-4 py-3 mb-5 rounded-2xl border border-gray-200 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="**********"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <div className="text-right text-sm mt-2 text-gray-400">
            Forget Password?
          </div>

          <button className="mt-8 w-full bg-black text-white py-4 rounded-2xl font-semibold text-lg shadow-[0_6px_12px_rgba(0,0,0,0.25)]">
            Login
          </button>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have any accoount?{" "}
            <span className="font-semibold text-black underline">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
