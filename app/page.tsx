import React from "react";

// import component
import { Navbar } from "@/components/navbar";
import Image from "next/image";

// import image
import iconJumbotron from '@/assets/images/bg-jumbotrons.svg'
import iconPanaLogin from '@/assets/images/mobile-login/pana.png'

// import interface
import  ImgClientStore from '@/interaface/iconClientInterface'
import CardComunityInterface from "@/interaface/comunityInterface";
import { InterfaceLocalBisnis } from "@/store/iconLocalBisnis";
// import store
import iconClient from "@/store/imgClientStore";
import CardComunity from "@/store/cardComunityStore";
import { infoLocalBisnis } from "@/store/iconLocalBisnis";

export default function Home() {

  return (
    <section className="relative font-poppins w-full h-[100vh] overflow-x-hidden overflow-auto border-2 border-red-500 pb-10">
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
              <button className="px-5 py-2 rounded-md text-[14px] bg-c-green-200 text-white transition-all duration-200 hover:bg-transparent hover:ring-1 hover:ring-c-green-200  hover:text-c-green-200 ">
                Register
              </button>
            </div>
          </section>

          {/*//! right content */}
          <div className="relative flex justify-center">
            <Image src={iconJumbotron} alt="iconjumbotron" className="select-none" loading="lazy"/>
          </div>
        </section>
      </section>

      {/*//! section our client */}
      <section className="relative max-w-[1200px] mt-16 mx-auto px-4">
        {/* title our client */}
        <div className="relative w-full">
          <h2 className="text-slate-950 font-semibold text-2xl min-[510px]:text-3xl text-center mb-1">Our Clients</h2>
          <p className="text-center text-c-slate-300 font-medium">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* image client */}
        <div className="relative w-full flex gap-4 item-centers mt-14  flex-wrap">
            {
              iconClient.map((el:ImgClientStore)=>{
                return <Image key={el.id} src={el.poster} alt={'iconclient'} className="flex-1 h-[50px] select-none" />
              })
            }
        </div>
      </section>

      {/*//! section comunity */}
      <section className="relative max-w-[1200px] mt-16 px-4 mx-auto ">
        {/* title comunty */}
        <div className="relative w-full">
          <h2 className="text-slate-950 font-semibold text-2xl min-[510px]:text-3xl text-center mb-1 max-w-[500px] mx-auto">Manage your entire community in a single system</h2>
          <p className="text-center text-c-slate-300 font-medium mt-3">
           Who is Nextcent suitable for?
          </p>
        </div>

        {/* card comunity */}
        <div className="flex w-full gap-x-3 gap-y-10 justify-center flex-wrap mt-14">
          {
            CardComunity.map((el:CardComunityInterface)=>{
              return (
                <div className="relative w-[300px]  p-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.2)] flex flex-col items-center gap-2">
                  {/* card header */}
                  <div className="relative w-full flex justify-center flex-col  items-center">
                    <div className="relative">
                      <Image src={el.poster} alt="icon" className="select-none" />
                    </div>
                  </div>
                  {/* title */}
                  <h2 className="text-slate-950 text-center font-semibold text-xl w-[60%] ">
                    {el.title}
                  </h2>
                  {/* description */}
                  <p className="text-c-slate-300 text-[13px] text-center line-clamp-3">
                    {el.description}
                  </p>

                </div>
              )
            })
          }

        </div>
      </section>

      {/*//! section information 3 */}
      <section className="relative max-w-[1200px] mt-16 px-4 mx-auto flex-col  flex gap-5 md:flex-row">
        {/* left content infirmation 3 */}
        <div className="relative flex justify-center">
            <Image src={iconPanaLogin} alt="iconPanaLogin" className="select-none" loading="lazy"/>
        </div>

        {/*right content information 3 */}
        <section className="relative w-full flex-1 flex flex-col gap-2 md:py-10 ">
            {/*title */}
            <div className="relative">
              <h2 className=" text-c-slate-400 text-2xl sm:text-3xl font-semibold">The unseen of spending three years at Pixelgrade </h2>
            </div>
            {/* desc */}
            <p className="my-5 text-c-slate-400 text-[13px] flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            {/* button action jumbotron */}
            <div className="relative">
              <button className="px-5 py-2 rounded-md text-[14px] bg-c-green-200 text-white transition-all duration-200 hover:bg-transparent hover:ring-1 hover:ring-c-green-200  hover:text-c-green-200 ">
                Learn More
              </button>
            </div>
          </section>
        
      </section>

      {/*//! section bisnis local */}
      <section className="relative bg-c-slate-100 py-[70px] mt-16 px-4">
        <section className="mx-auto max-w-[1200px] flex gap-4  flex-col lg:flex-row">
          {/* left content bisnis local */}
          <section className="relative w-full flex-1 flex flex-col gap-3">
            {/*title */}
            <div className="relative">
              <h3 className=" text-c-slate-400 text-3xl  font-semibold">Helping a local</h3>
              <h2 className=" text-c-green-200 text-3xl  font-semibold">business reinvent itself</h2>
            </div>
            {/* desc */}
            <p className="text-c-slate-400 text-[14px] flex-1">
            We reached here with our hard work and dedication
            </p>
          </section>
          {/* right content bisnis local */}
          <section className="relative w-full grid grid-cols-1 auto-rows-auto gap-2 lg:w-[600px] sm:grid-cols-2">
            {
              infoLocalBisnis?.map((el:InterfaceLocalBisnis) => {
                return (
                  <div key={el.id} className="relative w-full flex gap-3 py-3 ">
                    {/* icon */}
                    <Image src={el.icon} alt="iconLocalBisnis1" className="select-none"/>
                    {/* description */}
                    <div className="flex-1  flex flex-col">
                      <h3 className="text-xl font-semibold text-slate-950 m-0 p-0">{el.count}</h3>
                      <h3 className="text-sm text-c-slate-300 m-0 p-0">{el.title}</h3>
                    </div>
                  </div>
                )
              })
            }
            

          </section>
        </section>
      </section>
    </section>
  );
}
