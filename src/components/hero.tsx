import React from "react";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";

function Hero() {
  return (
    <div className="bg-gray-100">
      <main className=" wrapper">
        <section className="flex gap-6 items-center">
          <div className="py-7 px-8 my-auto">
            <h1 className="text-black text-6xl 2xl">Collections</h1>
            <p className="py-8 text-xl md:w-[300px] lg:w-[500px] 2xl:text-4xl 2xl:w-[850px]">
              You Can Explore Ans Shop Many Collection From Various Barands
              Here.
            </p>
            <button className="flex items-center gap-3 rounded-sm bg-black text-white font-semibold p-3 hover:bg-gray-500 duration-100 ">
            <FaBagShopping />
              Shop Now
            </button>
          </div>
          <div className="flex py-20 mx-auto">
            <Image
              src="/hero-image.webp"
              alt="logo"
              height={300}
              width={300}
              className="2xl:rounded-tl-[200px] rounded-tl-[100px] pb-10 h-96 w-72 mx-auto  2xl:h-[700px] 2xl:w-[500px]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero;
