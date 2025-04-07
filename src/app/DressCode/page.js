"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import NavBar from "../Navigation/navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { Button } from "../MTailwind";

export default function DressCode() {
  const dresscode = [
    {
      name: "School Dress Code",
      imageUrl:
        "https://resources.finalsite.net/images/f_auto,q_auto/v1620150677/kcusdcom/yrk8ysdnw1ekfx1zawgs/DressCodeClipart.jpg",
      link: "https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/School%20Dress%20Code%20Unifroms%20(K-3%20Only).pdf?ver=1663618705712",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="font-sans bg-white  ">
      <title>ASA Prep (test)</title>
      <div>
        <NavBar />
      </div>
      <main className="relative ">
        <div className="relative shadow-lg shadow-gray-700">
          <img
            src="https://www.the-rampage.org/wp-content/uploads/2018/09/dresscode.gif"
            className=" w-full object-cover  "
          />
          {/* <div className=" text-white absolute inset-0 place-items-center mb-4 text-3xl md:text-4xl lg:text-5xl mt-40 ml-20">
            <Typography className=" text-6xl font-semibold pt-48 h-full">
              Dress Code
            </Typography>
          </div> */}
        </div>
        <section className="bg-white">
          <div className="grid grid-rows-2 justify-items-center">
            <p className=" text-gray-700 text-xl font-sans font-semibold text-center w-1/2 pt-32">
              All students (2 1/2 years old and up) are required to wear a
              school uniform. The infants and toddlers are not required to wear
              uniform. Please follow the appropriate uniform guideline.
            </p>
            <img
              className=" pt-10"
              src="https://brightstarschools.org/files/_cache/96101df05503d78fd00cfb0dd08d7997.jpeg"
            />
          </div>
          <div
            ref={sectionRef}
            className={`justify-items-center pb-28 transition-opacity transform duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {dresscode.map((dresscode) => (
              <div key={dresscode.name} className="group [perspective:1000px]">
                <div className=" relative h-72 w-96 border-hidden box-border rounded-xl shadow-lg shadow-gray-500 transition [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000  ">
                  <div className=" h-full w-full [backface-visibility:hidden] ">
                    {dresscode.imageUrl && (
                      <img
                        src={dresscode.imageUrl}
                        alt={dresscode.name}
                        className="h-full  object-cover rounded-xl "
                      />
                    )}

                    <h2 className="flex justify-center text-red-700 font-bold pt-3 text-2xl">
                      {dresscode.name}
                    </h2>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className=" flex min-h-full flex-col  justify-center">
                      <Link href={dresscode.link}>
                        <Button className=" bg-red-800 hover:bg-red-600 rounded-full font-bold text-md w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                          <span>Dress Code (K-3)</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/PRESCHOOL%20UNIFORMS.pdf?ver=1663618705712"
                        className="mt-4"
                      >
                        <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold text-md w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                          <span>Preschool Uniforms</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Dance%20Class%20Attire.pdf?ver=1663618705712"
                        className="mt-4"
                      >
                        <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold text-md w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                          <span>Dance Class Attire</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Karate%20Class%20Attire.docx?ver=1663618705712"
                        className="mt-4"
                      >
                        <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold text-md w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                          <span>
                            Karate Class Attire{" "}
                            <span className="text-[8px]">Download</span>
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
