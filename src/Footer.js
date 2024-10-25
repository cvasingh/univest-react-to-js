import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import ReactDOM from "react-dom";

import React from "react";
import "./output.css";
import "./input.css";
import "./index.css";

export default function Footer({}) {
  return (
    <footer
      aria-label="Univest Footer"
      className="bg-black text-white font-Inter"
    >
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-6 sm:px-6 md:space-y-8 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img
              src="https://storage.googleapis.com/app-assets-univest/blogs/logo.png"
              className="w-32 md:w-40 object-contain"
              alt="icon"
            />
            <p className="max-w-xs text-sm md:text-base font-semibold mt-4">
              100% Safe & Secure.
            </p>
            <p className="max-w-xs text-xs md:text-sm mt-4">
              Univest encrypts all data and transactions to ensure a completely
              secure experience for our members.
            </p>
            <div className="max-w-[210px] flex items-center px-3 py-1 border border-white rounded-full mt-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
              </svg>
              <p className="text-[10px] ml-2">
                Write to us :{" "}
                <a href="mailto:support@univest.in" className="font-semibold">
                  support@univest.in
                </a>
              </p>
            </div>
            <ul className="flex gap-6 mt-8">
              <li>
                <a
                  href="https://www.facebook.com/Univest.in"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <div className="bg-[#337FFF] p-2 rounded-full">
                    <FaFacebookF color="#FFFFFF" size={16} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/company/univest-in"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="bg-[#006699] p-2 rounded-full">
                    <FaLinkedinIn color="#FFFFFF" size={16} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/univest.in/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <div className="instabg p-2 rounded-full">
                    <BsInstagram color="#FFFFFF" size={16} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/UnivestIN"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="bg-[#33CCFF] p-2 rounded-full">
                    <BsTwitter color="#FFFFFF" size={16} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@Univest_In"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">YouTube</span>
                  <div className="bg-[#FF0000] p-2 rounded-full">
                    <BsYoutube color="#FFFFFF" size={16} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/+U-FU7kyhBvZiNTI1"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Telegram</span>
                  <div className="bg-[#FFF] p-[-1px] rounded-full">
                    <BsTelegram color="#0088cc" size={33} />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 md:col-span-2 md:grid-cols-4">
            <div>
              <p className="font-medium text-xs md:text-sm">PRODUCTS</p>

              <nav aria-label="Footer Navigation - PRODUCTS" className="mt-6">
                <ul className="space-y-3  text-xs md:text-smtext-sm">
                  <li className="cursor-pointer">
                    <a href="/pro" className="transition hover:opacity-75">
                      Pro
                    </a>
                  </li>

                  <li>
                    <a href="/stocks" className="transition hover:opacity-75">
                      Stock markets
                    </a>
                  </li>

                  {/* <li>
                                            <a href="/elite" className="transition hover:opacity-75">
                                                Elite
                                            </a>
                                        </li> */}

                  <li>
                    <a
                      href="/screeners"
                      className="transition hover:opacity-75"
                    >
                      Screeners
                    </a>
                  </li>

                  <li className="cursor-pointer">
                    <a
                      href="/shark-portfolios"
                      className="transition hover:opacity-75"
                    >
                      Shark stocks
                    </a>
                  </li>

                  <li className="cursor-pointer">
                    <a href="/markets" className="transition hover:opacity-75">
                      Markets
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-xs md:text-sm">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-3  text-xs md:text-smtext-sm">
                  <li>
                    <a href="/about-us" className="transition hover:opacity-75">
                      About us
                    </a>
                  </li>

                  <li>
                    <a
                      href="/blogs/"
                      rel="noreferrer"
                      className="transition hover:opacity-75"
                    >
                      Blogs
                    </a>
                  </li>

                  <li>
                    <a
                      href="/web-stories"
                      className="transition hover:opacity-75"
                    >
                      Web stories
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://stocks.univest.in/privacy-policy"
                      className="transition hover:opacity-75"
                    >
                      Privacy policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://stocks.univest.in/grievance-policy"
                      className="transition hover:opacity-75"
                    >
                      Grievance policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://stocks.univest.in/terms-and-conditions"
                      className="transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-xs md:text-sm">SUPPORT</p>

              <nav aria-label="Footer Navigation - SUPPORT" className="mt-6">
                <ul className="space-y-3  text-xs md:text-smtext-sm">
                  <li>
                    <a href="/faq" className="transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <nav
              aria-label="Footer Navigation - Legal"
              className="mt-6 md:mt-0"
            >
              <ul className="space-y-3  text-xs md:text-sm">
                <li>
                  <img
                    src="https://storage.googleapis.com/app-assets-univest/blogs/app_download_qr.png"
                    className="w-36 p-2 rounded bg-white"
                    alt="download now qr"
                  />
                  <p className="text-xs mt-1 mb-3 text-gray-200 pl-2">
                    Scan to Download
                  </p>
                </li>

                <li>
                  <a
                    href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <img
                      src="https://storage.googleapis.com/app-assets-univest/blogs/app_store.png"
                      width={114}
                      height={24}
                      className="w-36 object-contain"
                      alt="app store"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.univest.capp"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <img
                      src="https://storage.googleapis.com/app-assets-univest/blogs/google_pay.png"
                      width={114}
                      height={24}
                      className="w-36 object-contain"
                      alt="Google Play"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr />
        <p className="text-xs ">
          &copy; 2024 Univest. All rights reserved. | Made with ❤️ in India
        </p>
        {/* <p className="text-[10px] md:text-xs leading-5">
                    Disclaimer: Above are the only official social handles of our Company. Any communication or business transaction other than the above shared official handles by any user/customer shall not be the Company’s responsibility. User/customer(s) caution is advisable.
                </p> */}
      </div>
    </footer>
  );
}
export function Header({ isDark = false }) {
  return (
    <section
      id="Hero"
      className=" overflow-hidden bg-gradient-to-b from-[#343434] to-[#343434]"
    >
      <div className="px-4 w-full flex flex-col md:flex-row py-10 max-w-screen-xl mx-auto justify-between  items-center md:gap-20">
        <div className="flex flex-col items-start gap-6">
          <div className="w-full top-0 flex items-center justify-center md:justify-start">
            <div
              className={`text-white text-xl md:text-4xl font-bold ${
                !isDark ? "text-white" : "text-[#414141]"
              }`}
            >
              Univest
            </div>
            <img
              src="https://storage.googleapis.com/app-assets-univest/blogs/pro_light.png"
              alt="icon"
              className="w-9 md:w-[78px] object-contain ml-2"
            />
          </div>
          <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-start relative">
            <span
              className={`text-white text-xl md:text-5xl font-extrabold ${
                !isDark ? "text-white" : "text-[#414141]"
              }`}
            >
              India’s trusted
              <br className="show-on-desktop" /> stock market ideas
            </span>
          </div>

          <a href="/user/log-in" className="w-full hidden md:block">
            <button
              className={`font-Inter relative w-full text-black text-center buy-button pt-4 hover:animate-none`}
            >
              <div className="absolute text-sm font-extrabold left-1/2 translate-y-1/3 -translate-x-1/2 whitespace-nowrap">
                Activate FREE trial
              </div>
              <div className="buttont"></div>
              <div className="buttonb"></div>
            </button>
          </a>
        </div>
        <div
          className={`basis-full md:basis-5/12 flex content-center relative mt-6`}
        >
          <img
            src="https://storage.googleapis.com/app-assets-univest/blogs/get_5_free_trades.gif"
            alt="get_5_free_trades"
            width={1266}
            height={690}
            className="w-full"
          />
        </div>
      </div>
      <div className="[background:linear-gradient(127deg,#DDF6FF_-31.48%,#FFEAEF_95.46%)] px-4 py-2 md:px-20 md:py-4 flex whitespace-nowrap justify-center items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <p className="text-black text-sm font-medium leading-6  md:text-[28px] md:font-semibold md:leading-[49px]">
            Trusted by
          </p>
          <p className="text-black text-xl font-extrabold leading-8 md:text-[40px] md:font-extrabold md:leading-[65.333px]">
            40lakhs+ users
          </p>
        </div>
        <img
          className="w-[116px] h-[21px] md:w-[260px] md:h-[48px] ml-2 md:ml-4"
          src="https://storage.googleapis.com/app-assets-univest/blogs/rating.png"
          alt="demo"
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full px-4 py-3 duration-300 z-[101] shadow-[0px_0px_4px_rgba(255,255,255,0.6)] block md:hidden rounded-[12px_12px_0px_0px] proGradient">
        <a href="/user/log-in" className="w-full">
          <button
            id="ProDownloadButtonClick"
            class="select-none w-full py-1.5 rounded-full font-Inter text-base border bg-white border-primary text-black font-semibold shadow"
            tabindex="0"
          >
            Activate FREE trial
          </button>
        </a>
      </div>
    </section>
  );
}

try {
  window?.addEventListener("load", () => {
    ReactDOM.render(<Header />, document.getElementById("univest-top"));
  });

  window?.addEventListener("load", () => {
    ReactDOM.render(<Footer />, document.getElementById("univest-footer"));
  });
} catch (error) {
  console.log(error);
}
