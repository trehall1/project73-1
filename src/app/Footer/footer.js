"use client";
import React from "react";
import Link from "next/link";
import Card from "@material-tailwind/react";
export default function Footer() {

  return (
    <footer className="flex justify-between text-red-800 bg-white pl-20 pr-20 pb-10 pt-10">
      <div>
        <div className="text-lg font-semibold ">Contact Us</div>
        <div className="text-sm pt-5">
          <p>20433 Livernois,</p>
          <p>Detroit, Michigan 48221</p>
          <p> Phone: (123) 456 7689</p>
          <p>Fax:(987) 654 3210</p>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold">Join Mailing List:</div>
        <input
          placeholder="Email Address"
          className="w-60 h-10 mt-5 pl-3 bg-gray-100 shadow-lg placeholder:italic "
        ></input>
      </div>
      <div>
        <div className="text-lg font-semibold">Quick Links</div>
        <div className="text-sm pt-5 font-semibold">
        <Link
            href="/"
            className="flex hover:text-red-600 hover:-translate-y-1 duration-700 w-max mt-2"
          >
            Schedule Tour
          </Link>
          <Link
            href="/DressCode"
            className="flex hover:text-red-600 hover:-translate-y-1 duration-700 w-max mt-2"
          >
            Dress Code
          </Link>
        
        </div>
      </div>
    </footer>
  );
}
