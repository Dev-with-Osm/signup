import React, { useState } from "react";
import googleIcon from "./assets/google.png";
import xIcon from "./assets/x.png";
import linkIcon from "./assets/174857.png";
import gitIcon from "./assets/25231.png";
import Bg from "./assets/Bg";
// import bg from "./assets/bg.jpg";

export default function LoginCfp() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const bgClass = () => {
    if (clicked) {
      return " h-[100vh] duration-500 ease-in-out ";
    }
    return " ";
  };
  return (
    <div class="bg-[#F7F4FA] relative flex flex-col md:flex-row  w-full">
      <div
        class={
          "auth-bg bg-center bg-no-repeat bg-cover bg-local w-full  md:flex flex-col justify-between items-center p-3 duration-500 ease-in-out " +
          bgClass()
        }
      >
        <div></div>
        <div class="flex flex-col justify-center items-center gap-12 w-full text-center">
          {/* <img src={bg} alt="Login Logo" class="w-4/5 p-0 m-0" /> */}
          <Bg />
          <div class="w-3/4 gap-6 flex flex-col justify-center items-center">
            <p class="text-white font-segoe text-base font-light">
              Welcome back to call for participants backoffice team
            </p>
          </div>
        </div>
        <div>
          <p class="text-white font-segeo font-thin text-sm tracking-wider">
            All right reserved to @xHub | 2023
          </p>
        </div>
      </div>

      <button
        onClick={() => setClicked(!clicked)}
        className="text-red-900 z-50 absolute"
      >
        Scrool
      </button>

      <div class=" md:w-3/5 w-full flex justify-center items-center ">
        <form
          id="kc-register-form"
          action="${url.registrationAction}"
          method="post"
          class="  bg-white border-t w-full md:w-auto -mt-5 shadow-sm rounded-2xl py-5 px-8 sign-in-input"
        >
          <p class=" font-semibold text-base mb-0 text-[#98989E]">Welcome!</p>
          <p class="font-bold text-[26px]">Sign up to CFP </p>

          <div class="flex flex-col md:flex-row gap-1 md:gap-5 mt-3">
            <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('firstName',properties.kcFormGroupErrorClass!)}">
              <div class="${properties.kcLabelWrapperClass!}">
                <label
                  for="firstName"
                  class="font-semibold text-xs mb-1 mt-3 ${properties.kcLabelClass!}"
                >
                  First Name*
                </label>
                <svg
                  class="absolute ml-[13px] mt-[18px]"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z"
                    fill="#98989E"
                  />
                </svg>
                <div class="${properties.kcInputWrapperClass!}">
                  <input
                    placeholder="First Name"
                    required
                    type="text"
                    tabindex="1"
                    pattern="[A-Za-z'‘-’]+"
                    id="firstName"
                    class="${properties.kcInputClass!} mt-1 box-shadow placeholder:text-xs placeholder:font-semibold hover:border-[#755d8c] font-semibold outline-0 pl-[35px] border-1 border w-full h-[40px] rounded-full"
                    name="firstName"
                  />
                </div>
                <p id="firstNameError" class="text-[#FF0000] text-[14px]"></p>
              </div>
            </div>
            <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('lastName',properties.kcFormGroupErrorClass!)}">
              <div class="${properties.kcLabelWrapperClass!}">
                <label
                  for="lastName"
                  class="font-semibold text-xs mb-1 mt-3 ${properties.kcLabelClass!}"
                >
                  Last Name*
                </label>
                <svg
                  class="absolute ml-[13px] mt-[18px]"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z"
                    fill="#98989E"
                  />
                </svg>
                <div class="${properties.kcInputWrapperClass!}">
                  <input
                    placeholder="Last Name"
                    required
                    type="text"
                    tabindex="1"
                    pattern="[A-Za-z'‘-’]+"
                    id="lastName"
                    class="${properties.kcInputClass!}  mt-1 box-shadow placeholder:text-xs placeholder:font-semibold hover:border-[#755d8c] font-semibold outline-0 pl-[35px] border-1 border w-full h-[40px] rounded-full"
                    name="lastName"
                  />
                </div>
                <p id="lastNameError" class="text-[#FF0000] text-[14px]"></p>
              </div>
            </div>
          </div>

          <div>
            <div class="mt-3 ${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('email',properties.kcFormGroupErrorClass!)}">
              <div class="${properties.kcLabelWrapperClass!}">
                <label
                  for="email"
                  class="${properties.kcLabelClass!} font-semibold text-xs mb-1 mt-3"
                >
                  Email address*
                </label>
                <svg
                  class="ml-[13px] mt-[19px] absolute"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6666 0.666687H0.333313V11.3334H13.6666V0.666687ZM12.3333 3.33335L6.99998 6.66669L1.66665 3.33335V2.00002L6.99998 5.33335L12.3333 2.00002V3.33335Z"
                    fill="#98989E"
                  ></path>
                </svg>
              </div>
              <div class="${properties.kcInputWrapperClass!}">
                <input
                  placeholder="Email Address"
                  required
                  type="text"
                  tabindex="1"
                  id="email"
                  class="${properties.kcInputClass!} mt-1 box-shadow placeholder:text-xs placeholder:font-semibold hover:border-[#755d8c]  font-semibold  outline-0 pl-[35px] border-1 border w-full  h-[40px]  rounded-full"
                  name="email"
                  autocomplete="email"
                />
              </div>
              <p
                id="emailValidationResult"
                class="text-[#FF0000] text-[14px] "
              ></p>
            </div>
          </div>

          <div class="relative mt-3">
            <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('password',properties.kcFormGroupErrorClass!)}">
              <div class="${properties.kcLabelWrapperClass!}">
                <label
                  for="password"
                  class="font-semibold text-xs mb-1 mt-3 ${properties.kcLabelClass!}"
                >
                  Password*
                </label>
                <svg
                  width="12"
                  class="ml-[13px] mt-[15px] absolute "
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3334 5.33337H9.33335V4.14003C9.33335 2.40003 8.06002 0.846699 6.32669 0.680032C4.34002 0.493365 2.66669 2.05337 2.66669 4.00003V5.33337H0.666687V14.6667H11.3334V5.33337ZM6.00002 11.3334C5.26669 11.3334 4.66669 10.7334 4.66669 10C4.66669 9.2667 5.26669 8.6667 6.00002 8.6667C6.73335 8.6667 7.33335 9.2667 7.33335 10C7.33335 10.7334 6.73335 11.3334 6.00002 11.3334ZM4.00002 5.33337V4.00003C4.00002 2.89337 4.89335 2.00003 6.00002 2.00003C7.10669 2.00003 8.00002 2.89337 8.00002 4.00003V5.33337H4.00002Z"
                    fill="#98989E"
                  ></path>
                </svg>
                <svg
                  class="ml-[13px] hide  mt-[15px] absolute right-[11px]"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye-invisible"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                  <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                </svg>
                <svg
                  class="ml-[13px] show hidden mt-[15px] absolute right-[11px]"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              </div>
              <div class="${properties.kcInputWrapperClass!}">
                <input
                  placeholder="e.g.: X Æ A-12"
                  required
                  type="password"
                  id="password-new"
                  tabindex="4"
                  pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$"
                  class="${properties.kcInputClass!} mt-1   box-shadow placeholder:text-xs placeholder:font-semibold hover:border-[#755d8c] password font-semibold  outline-0 pl-[35px] border-1 border w-full h-[40px] rounded-full"
                  name="password"
                  autocomplete="new-password"
                />
              </div>
              <p
                id="passwordValidationResult"
                class="text-[#FF0000] text-[14px]"
              ></p>
            </div>
          </div>

          <div class="relative mt-3">
            <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('password-confirm',properties.kcFormGroupErrorClass!)}">
              <div class="${properties.kcLabelWrapperClass!}">
                <label
                  for="password-confirm"
                  class=" font-semibold text-xs mb-1 mt-3 ${properties.kcLabelClass!} "
                >
                  passwordConfirm*
                </label>
                <svg
                  width="12"
                  class="ml-[13px] mt-[15px] absolute "
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3334 5.33337H9.33335V4.14003C9.33335 2.40003 8.06002 0.846699 6.32669 0.680032C4.34002 0.493365 2.66669 2.05337 2.66669 4.00003V5.33337H0.666687V14.6667H11.3334V5.33337ZM6.00002 11.3334C5.26669 11.3334 4.66669 10.7334 4.66669 10C4.66669 9.2667 5.26669 8.6667 6.00002 8.6667C6.73335 8.6667 7.33335 9.2667 7.33335 10C7.33335 10.7334 6.73335 11.3334 6.00002 11.3334ZM4.00002 5.33337V4.00003C4.00002 2.89337 4.89335 2.00003 6.00002 2.00003C7.10669 2.00003 8.00002 2.89337 8.00002 4.00003V5.33337H4.00002Z"
                    fill="#98989E"
                  ></path>
                </svg>
                <svg
                  class="ml-[13px] hide  mt-[15px] absolute right-[11px]"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye-invisible"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                  <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                </svg>
                <svg
                  class="ml-[13px] show hidden mt-[15px] absolute right-[11px]"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              </div>
              <div class="${properties.kcInputWrapperClass!}">
                <input
                  type="password"
                  placeholder="e.g.: X Æ A-12"
                  required
                  tabindex="5"
                  id="password-confirm"
                  name="password-confirm"
                  class="${properties.kcInputClass!} mt-1 box-shadow password placeholder:text-xs placeholder:font-semibold hover:border-[#755d8c] font-semibold outline-0 pl-[35px] border-1 border w-full h-[40px] rounded-full"
                />
              </div>
              <p
                id="confirmation-password-error"
                class="text-[#FF0000] -mb-3 text-[14px]"
              ></p>
            </div>
          </div>

          <p class="text-[11px] leading-5 mt-7 mb-2">
            By continuing you agree to CFP's
            <span class="text-[#5f4080] font-bold cursor-pointer hover:underline">
              Terms of Services
            </span>
            and acknowledge <br /> you've read our
            <span class="text-[#5f4080] font-bold cursor-pointer hover:underline">
              Privacy Police
            </span>
          </p>

          <div class="${properties.kcFormGroupClass!}">
            <div id="kc-form-buttons" class="${properties.kcFormButtonsClass!}">
              <button
                class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!} cursor-pointer poi bg-[#5F4080] text-white font-semibold !rounded-full w-full text-lg h-11 mt-2"
                name="login"
                id="kc-register"
                type="submit"
              >
                Sign up
              </button>
              <div id="kc-form-options" class="flex justify-center mt-1.5">
                <a
                  class="cursor-pointer poi text-[#5F4080] font-semibold hover:text-[#98989E] text-lg"
                  href="${url.loginUrl}"
                >
                  Sign in
                </a>
              </div>
              <div>
                <p
                  id="sign-in-message"
                  class="  text-center mt-1.5 text-[#98989E]"
                >
                  Or sign in with
                </p>
                <div className="w-full flex gap-10 justify-center mt-5">
                  <img src={googleIcon} className="w-7" alt="" />
                  <img src={xIcon} className="w-7" alt="" />
                  <img src={linkIcon} className="w-7" alt="" />
                  <img src={gitIcon} className="w-7" alt="" />
                </div>
              </div>
              {/* <input
                class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!}"
                type="submit"
              /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
