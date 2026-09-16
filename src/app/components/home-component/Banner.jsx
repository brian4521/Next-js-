"use client";
import React from "react";
import { useState } from "react";

export default function Banner() {
  // let openAskUs = () => {
  //   console.log("Ask Us button clicked");
  // };

  const [isAskUsOpen, setIsAskUsOpen] = useState(false);

  return (
    <>
      <div
        className={`w-[320px] duration-300 fixed ${isAskUsOpen ? "top-[50%]" : "top-[-1000px]"} left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-8 shadow-lg z-50`}
      >
        <h2 className="relative text-2xl font-bold mb-4">
          Enquire Now
          <button
            onClick={() => {
              setIsAskUsOpen(false);
            }}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <section className="bg-[url('https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg')] bg-cover bg-center h-screen ">
        <div className="flex flex-col items-center justify-center h-full bg-opacity-50">
          <h1 className="text-4xl font-bold text-center text-white">
            Building digital experiences <br /> that make an impact.
          </h1>
          <p className="text-lg text-center text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={() => {
              setIsAskUsOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Ask Us
          </button>
        </div>
      </section>
    </>
  );
}
