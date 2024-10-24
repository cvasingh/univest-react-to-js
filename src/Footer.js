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
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-6 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="https://storage.googleapis.com/app-assets-univest/blogs/logo.png"
              className="w-32 lg:w-40 object-contain"
              alt="icon"
            />
            <p className="max-w-xs text-sm lg:text-base font-semibold mt-4">
              100% Safe & Secure.
            </p>
            <p className="max-w-xs text-xs lg:text-sm mt-4">
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

          <div className="grid grid-cols-3 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-xs lg:text-sm">PRODUCTS</p>

              <nav aria-label="Footer Navigation - PRODUCTS" className="mt-6">
                <ul className="space-y-3  text-xs lg:text-smtext-sm">
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
              <p className="font-medium text-xs lg:text-sm">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-3  text-xs lg:text-smtext-sm">
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
              <p className="font-medium text-xs lg:text-sm">SUPPORT</p>

              <nav aria-label="Footer Navigation - SUPPORT" className="mt-6">
                <ul className="space-y-3  text-xs lg:text-smtext-sm">
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
              className="mt-6 lg:mt-0"
            >
              <ul className="space-y-3  text-xs lg:text-sm">
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
        {/* <p className="text-[10px] lg:text-xs leading-5">
                    Disclaimer: Above are the only official social handles of our Company. Any communication or business transaction other than the above shared official handles by any user/customer shall not be the Company’s responsibility. User/customer(s) caution is advisable.
                </p> */}
      </div>
    </footer>
  );
}

window?.addEventListener("load", () => {
  ReactDOM.render(<Footer />, document.getElementById("univest-footer"));
});
