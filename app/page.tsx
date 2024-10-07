import React from "react";

// import component
import { Navbar } from "@/components/navbar";
import Image from "next/image";

// import image
import iconJumbotron from '@/assets/images/bg-jumbotrons.svg'

export default function Home() {
  return (
    <section className="relative font-poppins w-full h-[100vh] overflow-x-hidden overflow-auto border-2 border-red-500">
      {/*//! navbar */}
      <Navbar/>

      {/*//! CONTENT JUMBOTRON */}
      <section className="relative bg-c-slate-100 pt-[120px]  pb-10  min-[450px]:pt-[100px]">
        {/*//! CONTAINER JUMBOTRON */}
        <section className="mx-auto max-w-[1200px] flex gap-4 px-5 flex-col md:flex-row  " >
          {/*//! LEFT CONTENT JUMBOTRON */}
          <section className="relative w-full flex-1 flex flex-col gap-2 md:py-10">
            {/*title */}
            <div className="relative">
              <h2 className=" text-c-slate-400 text-2xl min-[450px]:text-4xl lg:text-5xl font-semibold">Lessons and insights </h2>
              <h2 className=" text-c-green-200 text-2xl min-[450px]:text-4xl lg:text-5xl font-semibold">from 8 years</h2>
            </div>
            {/* desc */}
            <p className="my-5 text-c-slate-400 text-[14px] flex-1">
              Where to grow your business as a photographer: site or social media?
            </p>
            {/* button action jumbotron */}
            <div className="relative">
              <button className="px-5 py-2 rounded-md text-[14px] bg-c-green-200 text-white ">
                Register
              </button>
            </div>
          </section>

          {/*//! right content */}
          <div className="relative flex justify-center">
            <Image src={iconJumbotron} alt="iconjumbotron" loading="lazy"/>
          </div>

        </section>

      </section>
    </section>
  );
}
