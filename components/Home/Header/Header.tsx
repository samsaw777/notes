import { useState, useEffect } from "react";
import Image from "next/image";
import classnames from "classnames";
const Header = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  useEffect(function mount() {
    const changeBackground = () => {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return function unMount() {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    //This is for the Mobile View.
    <>
      <header
        className={classnames(
          navbar ? "bg-white" : "bg-transparent",
          "sticky top-0 z-50 p-5 md:px-20"
        )}
      >
        {/* left Side */}
        <div className="flex justify-between">
          <div className="relative flex items-center h-10 w-32  cursor-pointer my-auto">
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              alt="airbnd"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="hidden sm:flex relative w-72 md:w-96">
            <div
              className={classnames(
                navbar ? "-top-2" : "top-28",
                "transform transition duration-150 ease-in-out absolute flex broder border-2 border-gray-200 p-3 justify-center rounded-full mx-auto w-72 md:w-96"
              )}
            >
              <input
                className={classnames(
                  navbar
                    ? "text-black placeholder-black"
                    : "text-white placeholder-white font-bold",
                  "flex-grow outline-none bg-transparent"
                )}
                placeholder="Search a place here"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 bg-red-400 text-white p-1 rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* User Side */}
          <div className="flex items-center space-x-4">
            <div
              className={classnames(
                navbar ? "border-black" : "border-black",
                "flex p-1 border-2  rounded-full"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classnames(
                  navbar ? "text-black" : "text-black",
                  "h-6 w-6 "
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classnames(
                  navbar ? "text-black" : "text-black",
                  "h-6 w-6 "
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Search Side */}
        <div className="absolute top-28 left-0 right-0 px-10 block sm:hidden">
          <div
            className={classnames(
              navbar ? "hidden" : "flex",
              "broder border-2 border-white p-3 rounded-full md:w-96"
            )}
          >
            <input
              className="flex-grow outline-none bg-transparent placeholder-white text-white"
              placeholder="Search a place here"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 bg-red-400 text-white p-1 rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
