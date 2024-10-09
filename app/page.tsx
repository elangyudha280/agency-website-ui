import React from "react";

// import component
import { Navbar } from "@/components/navbar";
import Image from "next/image";

// import image
import iconJumbotron from '@/assets/images/bg-jumbotrons.svg'
import iconPanaLogin from '@/assets/images/mobile-login/pana.png'
import iconRafiki from '@/assets/images/mobile-login/rafiki.png'
import iconinf3 from '@/assets/images/mobile-login/inf3.jpg'

// import interface
import  ImgClientStore from '@/interaface/iconClientInterface'
import CardComunityInterface from "@/interaface/comunityInterface";
import { InterfaceLocalBisnis } from "@/store/iconLocalBisnis";

// import store
import iconClient from "@/store/imgClientStore";
import CardComunity from "@/store/cardComunityStore";
import { infoLocalBisnis } from "@/store/iconLocalBisnis";

export default function Home() {

  const cardMarketing : readonly {id:string|number,desc:string}[] = [
    {
      id:1,
      desc:'Creating Streamlined Safeguarding Processes with OneRen'
    },
    {
      id:2,
      desc:'What are your safeguarding responsibilities and how can you manage them?'
    },
    {
      id:1,
      desc:'Revamping the Membership Model with Triathlon Australia'
    },
  ] 

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
            <Image src={iconRafiki} alt="iconPanaLogin" className="select-none" loading="lazy"/>
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

      {/*//! section information 5 */}
      <section className="relative max-w-[1200px] mt-16 px-4 mx-auto flex-col  flex gap-5 md:flex-row">
        {/* left content infirmation 3 */}
        <div className="relative flex justify-center">
            <Image src={iconPanaLogin} alt="iconPanaLogin" className="select-none" loading="lazy"/>
        </div>

        {/*right content information 3 */}
        <section className="relative w-full flex-1 flex flex-col gap-2 md:py-10 ">
            {/*title */}
            <div className="relative">
              <h2 className=" text-c-slate-400 text-2xl sm:text-3xl font-semibold">How to design your site footer like we did</h2>
            </div>
            {/* desc */}
            <p className="my-5 text-c-slate-400 text-[13px] flex-1">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            {/* button action  */}
            <div className="relative">
              <button className="px-5 py-2 rounded-md text-[14px] bg-c-green-200 text-white transition-all duration-200 hover:bg-transparent hover:ring-1 hover:ring-c-green-200  hover:text-c-green-200 ">
                Learn More
              </button>
            </div>
          </section>
        
      </section>

      {/*//! section customerS */}
      <section className="relative bg-c-slate-100 py-[70px] mt-16 px-4">
        <section className="mx-auto max-w-[1200px] flex gap-7  flex-col lg:flex-row  max-lg:items-center">
          {/* left content  */}
          <section className="relative  w-full h-full lg:w-[400px] lg:h-[400px] overflow-hidden rounded-md">
           <Image src={iconinf3} alt="iconinf3" className="object-center object-cover w-full h-full" />
          </section>
          {/* rigth content */}
          <section className="w-full flex-1 py-3 flex flex-col gap-2">
            <p className="text-[15px] text-c-slate-300 text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            {/*  */}
            <div className="flex-1 h-full">
              <h2 className="m-0 p-0 text-c-green-200 font-semibold text-[20px]">
              Tim Smith
              </h2>
              <p className="text-c-slate-300 text-[14px]">
                British Dragon Boat Racing Association
              </p>
            </div>
            {/*  */}
               <div className="flex gap-2 flex-wrap py-5">
               {
               iconClient?.map((el:ImgClientStore)=>{
                return  <Image key={el.id} src={el.poster} alt="" />
               })
               }
              </div>
          </section>
        </section>
      </section>

      {/*//! section marketing */}
      <section className="relative max-w-[1200px] mt-16 px-4 mx-auto ">
        {/* title marketing */}
        <div className="relative w-full">
          <h2 className="text-slate-950 font-semibold text-2xl min-[510px]:text-3xl text-center mb-1 max-w-[500px] mx-auto">Caring is the new marketing</h2>
          <p className="text-center text-c-slate-300 font-medium mt-3">
           The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
          </p>
        </div>

        {/* card marketing */}
        <div className="flex w-full gap-x-3 gap-y-10 justify-center flex-wrap mt-14">
          {
            cardMarketing.map((el:any)=>{
              return (
                <div className="relative w-[300px]  p-5 rounded-md  flex flex-col items-center gap-4 bg-c-slate-100">
                    <h2 className="text-center text-slate-600 text-[15px] flex-1 line-clamp-3">
                      {el.desc}
                    </h2>

                    <button className="w-full text-center  capitalize text-c-green-200" >
                      read more
                    </button>
                </div>
              )
            })
          }

        </div>
      </section>

      {/*//! section info demo*/}
      <section className="relative bg-c-slate-100 py-[30px] mt-16 px-4">
        <h2 className="text-center font-semibold text-2xl mx-auto min-[500px]:text-5xl max-w-[700px] ">
        Pellentesque suscipit fringilla libero eu.
        </h2>
        <div className="relative w-full flex justify-center mt-7">
              <button className="px-5 py-2 rounded-md text-[14px] bg-c-green-200 text-white transition-all duration-200 hover:bg-transparent hover:ring-1 hover:ring-c-green-200  hover:text-c-green-200 ">
                Get a Demo
              </button>
            </div>
      </section>
    </section>
  );
}
