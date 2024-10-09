'use client'
import React from 'react'

// import component
import Image from 'next/image'
import { FaInstagram,FaTwitter,FaYoutube,FaDribbble } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Link from 'next/link';
// import gambar
import iconNextCent from '@/assets/images/icon-nav.svg'

function Footer() {
  return (
    <section className="relative w-full  bg-[#263238] px-5">
        <div className="relative max-w-[1200px] mx-auto flex  gap-4  py-8 flex-wrap flex-col sm:flex-row ">
            {/* //! info footer */}
            <div className="realtive flex-1 flex flex-col ">
                {/* title */}
                <div className="flex gap-2 items-center select-none pb-5">
                    <Image src={iconNextCent} alt='iconNextCent'/>
                    <h2 className="text-3xl text-white font-semibold ">Nextcent</h2>\
                </div>
                {/* copyrigth */}
                <div className="flex-1 text-c-slate-100">
                    <p className="text-[14px]">Copyright © {new Date().getFullYear()} Nexcent ltd.</p>
                    <p className="text-[14px] mt-1">All rights reserved</p>
                </div>
                {/* social media */}
                <div className="flex gap-5 mt-10">
                    <Link href="/" className=" w-[32px] h-[32px] rounded-full relative bg-c-slate-400 grid place-items-center">
                        <FaInstagram className='text-white'/>
                    </Link>
                    <Link href="/" className=" w-[32px] h-[32px] rounded-full relative bg-c-slate-400 grid place-items-center">
                        <FaDribbble className='text-white'/>
                    </Link>
                    <Link href="/" className=" w-[32px] h-[32px] rounded-full relative bg-c-slate-400 grid place-items-center">
                        <FaTwitter className='text-white'/>
                    </Link>
                    <Link href="/" className=" w-[32px] h-[32px] rounded-full relative bg-c-slate-400 grid place-items-center">
                        <FaYoutube className='text-white'/>
                    </Link>
                    

                </div>

            </div>
            
            {/* info navigasi company */}
            <div className="relative  sm:px-5">
                <h2 className="text-white font-semibold pb-2 text-[20px]">
                    Company
                </h2>

                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <Link href={'/'} className=' text-[13px] text-c-slate-100 font-medium'>
                            About Us
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                            Blog
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                            Contact Us
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                            Pricing
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                          Testimonial
                        </Link>
                    </div>
                </div>
            </div>

            {/* info navigasi support */}
            <div className="relative  sm:px-5">
                <h2 className="text-white font-semibold pb-2 text-[20px]">
                    Support
                </h2>

                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <Link href={'/'} className=' text-[13px] text-c-slate-100 font-medium'>
                            Help Center
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                        Terms of service
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                            Legal
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href={'/'} className='text-[13px] text-c-slate-100 font-medium'>
                          Status
                        </Link>
                    </div>
                </div>
            </div>

            {/* info send email */}
            <div className=" max-lg:flex-1">
                <h2 className="text-white font-semibold text-[20px]">
                    Stay up to date
                </h2>
                {/* input send email */}
                <label className="input p-1 pr-3 bg-slate-700  flex items-center gap-2 mt-5">
                <input type="email" className="grow px-2 py-1 text-[14px] text-white max-sm:w-full" placeholder="Your email address" />
                    <IoIosSend className='text-[20px] text-white'/>
                </label>
            </div>
        </div>
    </section>      
  )
}

export default Footer