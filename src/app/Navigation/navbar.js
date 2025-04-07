"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../MTailwind";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white font-sans">
      <title>ASA Prep (test)</title>

      <nav
        className={` grid grid-cols-2 justify-items-center h-24 w-full  ${
          isScrolled
            ? "bg-white bg-opacity-100 ease-in duration-1000 shadow-lg"
            : "bg-transparent ease-out duration-1000"
        } fixed z-10 items-center`}
      >
        <Link
          href="/"
          className="font-extrabold text-4xl text-red-800 flex justify-self-start ml-10 "
        >
          <span className={`${isScrolled ? "text-red-800" : "text-white"}`}>
            ASA
          </span>{" "}
          <span
            className={`pl-2.5 ${
              isScrolled ? "text-gray-700" : "text-red-800"
            }`}
          >
            Higher Learning Prep
          </span>{" "}
        </Link>
        <div
          className={` flex items-center text-lg space-x-7 font-semibold justify-self-end mr-10 ${
            isScrolled ? "text-gray-700" : "text-gray-100"
          }`}
        >
          <Link
            href="/"
            className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500 "
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="text-red-800  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-800 rounded-ee-xl duration-500  "
          >
            About Us
          </Link>
          <Link
            href="/"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500"
          >
            Schedule Tour
          </Link>
          <Link href="/Enrollment">
            {" "}
            <button className=" bg-red-800 rounded-full h-12 font-semibold items-center w-[130px] hover:-translate-y-2 transition-all shadow-[.4rem_.4rem_.70rem_rgba(0,0,0,0.65),_-.3rem_-.3rem_1rem_rgba(255,255,255,.25)] active:shadow-[inset_.5rem_.5rem_1rem_rgba(0,0,0,.6),_inset_-.5rem_-.5px_1rem_rgba(239,83,80,.5)] outline-none hover:scale-[1.1]  active:ring-4 active:ring-red-800 focus:outline-none delay-100 ease-in-out duration-700 ">
              {" "}
              <span className={`${isScrolled ? "text-white" : "text-white"}`}>
                Enroll Today!
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
