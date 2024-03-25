import React from "react";
import googleIcon from "./assets/google.png";
import xIcon from "./assets/x.png";
import linkIcon from "./assets/174857.png";
import gitIcon from "./assets/25231.png";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-full my-10 p-5">
      <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-10">
        <div className="mb-8">
          <p className="font-bold text-gray-400 text-base">Welcome! </p>
          <h1 className="font-bold text-[26px]">Sign up to CFP</h1>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <div className="flex w-full relative flex-col gap-2">
              <label className="text-xs font-bold">First Name*</label>
              <div className="absolute left-3 bottom-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full border rounded-full pl-9 p-2  placeholder:text-xs placeholder:font-bold  "
              />
            </div>
            <div className="flex w-full relative flex-col gap-2">
              <label className="text-xs font-bold">Last Name*</label>
              <div className="absolute left-3 bottom-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full border rounded-full pl-9 p-2 placeholder:text-xs placeholder:font-bold  "
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold">Email address*</label>
            <div className="flex relative w-full flex-col gap-4">
              <div className="absolute left-3 bottom-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 text-gray-400"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border pl-10 rounded-full p-2 placeholder:text-xs placeholder:font-bold"
              />
            </div>
          </div>
          <div className="flex relative flex-col gap-2">
            <label className="text-xs font-bold">Password*</label>
            <div className="absolute bottom-2.5 right-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute left-3 bottom-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-4">
              <input
                type="password"
                placeholder="e.g,: XÆ A-12"
                required
                className="w-full border rounded-full pl-10 p-2 placeholder:text-xs placeholder:font-bold "
              />
            </div>
          </div>
          <div className="flex relative flex-col gap-2">
            <label className="text-xs font-bold">Confirm password*</label>
            <div className="absolute bottom-2.5 right-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute left-3 bottom-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-4">
              <input
                type="password"
                placeholder="e.g,: XÆ A-12"
                required
                className="w-full border rounded-full pl-10 p-2 placeholder:text-xs placeholder:font-bold "
              />
            </div>
          </div>
          <p className="text-[11px] leading-5 ">
            By continuing you agree to CFP's{" "}
            <span className="text-[#5f4080] font-bold">Terms of Services</span>{" "}
            and acknowledge <br /> you've read our{" "}
            <span className="text-[#5f4080] font-bold">Privacy Police</span>
          </p>

          <button className="bg-[#5f4080]  p-2.5 rounded-full text-white text-lg font-bold">
            Sign up
          </button>
          <button className="text-violet-900 font-bold">Sign in</button>
          <p className="text-center text-[#98989e] font-bold text-base my-1">
            Or sign up with
          </p>
          <div className="w-full flex gap-10 justify-center">
            <img src={googleIcon} className="w-7" alt="" />
            <img src={xIcon} className="w-7" alt="" />
            <img src={linkIcon} className="w-7" alt="" />
            <img src={gitIcon} className="w-7" alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
