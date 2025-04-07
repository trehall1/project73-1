"use client";
import { useState, useEffect } from "react";
import React from "react";
import NavBar from "../Navigation/navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { Button } from "../MTailwind";

export default function AboutUs() {
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
    <div>
      <title>ASA Prep (test)</title>
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
            <span
              className={`  ${isScrolled ? "text-red-800" : "text-gray-700"}`}
            >
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
              isScrolled ? "text-gray-700" : "text-gray-700"
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
              <button className=" bg-red-800 rounded-full h-12 font-semibold items-center w-[130px]  hover:-translate-y-2 duration-700 transition-all shadow-[.4rem_.4rem_.70rem_rgba(0,0,0,0.65),_-.3rem_-.3rem_1rem_rgba(255,255,255,.25)] active:shadow-[inset_.5rem_.5rem_1rem_rgba(0,0,0,.6),_inset_-.5rem_-.5px_1rem_rgba(239,83,80,.5)] outline-none hover:scale-[1.1]  active:ring-4 active:ring-red-800 focus:outline-none delay-100 ease-in-out ">
                {" "}
                <span className={`${isScrolled ? "text-white" : "text-white"}`}>
                  Enroll Today!
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      <main className="relative bg-gray-200 h-full">
        <section className="grid grid-rows-1 justify-items-center">
          <div className=" pt-32 text-red-800 text-5xl font-semibold ">
            Who We Are
          </div>
          <p className="text-gray-700 text-xl pt-16 font-sans font-semibold w-1/2 text-center pb-16">
            ASA Higher Learning Prep has provided accelerated learning programs
            for over 25 years . It is our belief that educational success begins
            with early education, beginning from the Infant-Toddler stage. Our
            school provides a learning environment designed to help all students
            excel in academics. We prepare your child to leave ASA Prep, with a
            solid foundation enabling him/her to complete in classrooms at some
            of the most prestigious schools in Michigan. <br />
            <br />
            The educational program consists of a structured curriculum centered
            around Teacher directed instruction in Reading, Math, Phonics, Early
            Reading & Math Readiness, Handwriting, Science, and more. The
            students have a full, but varied day interspersed with Teacher
            directed lessons, Student Directed Free choice times,
            Extracurricular classes, etc. Homework is also a mandatory part of
            the ASA Prep program. We invite you to partner with us in giving
            your child the best education.
          </p>
        </section>
        <section className="bg-white grid justify-items-center">
          <div className="rounded-full bg-red-800 h-24 w-60 mt-24 place-content-center hover:bg-red-600 hover:-translate-y-2 duration-700">
            <div className="grid grid-rows-1 justify-center text-xl font-semibold text-white ">
              Schedule Tour<h3>(123)-456-7890</h3>
            </div>
          </div>
        </section>
        <section className="bg-white grid justify-items-center">
          <div className="grid grid-rows-1 justify-center pt-24 pb-10">
            <div className="border box-border shadow-lg shadow-gray-500 w-11/12 rounded-xl hover:-translate-y-4 duration-500 ">
              <img
                className=" rounded-xl w-full h-80 rounded-b-none object-cover "
                src="https://www.shutterstock.com/image-vector/human-hands-clapping-giving-ovation-600nw-2387793557.jpg"
              />
              <div className="text-2xl text-red-800 font-extrabold flex justify-center mt-7">
                Our Programs
              </div>
              <ul className="list-disc text-gray-700 pt-5 font-bold pl-10 pb-10">
                <li>Infant-Toddler (6 wks-2 1/2 Yrs)</li>
                <li>
                  Preschool 1 & 2 (2 1/2 yrs-3 1/2 yrs, completely toilet
                  trained)
                </li>
                <li>
                  Private Pre-kindergarten (4-4 1/2 yr olds) ASA Prep
                  Accelerated Curriculum
                </li>
                <li>GSRP- Free Pre-K Program-High Scope Curriculum</li>
                <li>Jr. Kindergarten (4 - 4 1/2 yrs)</li>
                <li>Grade School (5+ yrs) K-3rd</li>
                <li>Summer Camp (Enrollment begins in April)</li>
                <li>Latchkey Services</li>
              </ul>
            </div>
          </div>
        </section>
        <footer>
          {" "}
          <Footer />
        </footer>
      </main>
    </div>
  );
}
