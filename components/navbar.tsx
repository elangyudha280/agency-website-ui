
'use client'
import React, {useLayoutEffect } from 'react'

// import component
import Image from 'next/image'

// import gambar
import iconNav from '@/assets/images/icon-nav.svg'

// import interface
import { NavItemInterface } from '@/interaface/navbarInterface'

// import pkg
import Link from 'next/link'
function Navbar() {
    //! data nav items
    const navItems : NavItemInterface[] = [
        {
            id:1,
            title:"Home",
            url:'/'
        },
        {
            id:2,
            title:"Service",
            url:'/'
        },
        {
            id:3,
            title:"Feature",
            url:'/'
        },
        {
            id:4,
            title:"Product",
            url:'/'
        },
        {
            id:5,
            title:"Testimonial",
            url:'/'
        },
        {
            id:6,
            title:"FAQ",
            url:'/'
        },
    ]

  return (
   <nav className={`w-full  fixed top-0 left-0 z-[15] bg-white shadow-sm`}>
    <section className="navbar max-w-[1200px] mx-auto max-[450px]:flex-col px-5">
        {/*//! nav item left */}
        <div className="navbar-start max-[450px]:w-full">
            {/* button dropdown nav items */}
            <div className="dropdown  mr-2 lg:mr-0">
            <div tabIndex={0} role="button" className="btn  p-0 px-3 lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <div
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1]  mt-3  p-2 shadow">
                {
                navItems?.map((el:NavItemInterface)=>{
                    return (
                        <Link key={el.id} href={`${el.url}`} scroll={false} className='menu hover:bg-c-slate-200/20 rounded-sm'>
                            {el.title}
                        </Link>
                    )
                    })
                }    
            </div>
            </div>
            
            {/* title nav */}
            <a className="relative flex gap-2 items-center  h-full" href='#' >
                <Image src={iconNav} alt='icon' />
                <h2 className="text text-2xl font-semibold">
                    Nexcent
                </h2>
            </a>
        </div>

        {/*//! nav center */}
        <div className="navbar-center p-0 hidden lg:flex  gap-10  ">
            {
                navItems?.map((el:NavItemInterface)=>{
                    return (
                        <Link key={el.id} href={`${el.url}`} scroll={false} className='text-c-[#18191F] text-[14px]'>
                            {el.title}
                        </Link>
                    )
                })
            }
        </div>

        {/*//! nav end */}
        <div className="navbar-end gap-2 max-[450px]:w-full">
            <a href='#' className="text-[13px] w-full text-center min-[450px]:w-auto   px-7 py-2 bg-transparent text-c-green-200 rounded-md">Login</a>
            <a href='#' className="text-[13px] w-full text-center min-[450px]:w-auto  px-7 py-2 text-white rounded-md bg-c-green-200 transition-all duration-200 hover:bg-transparent hover:ring-1 hover:ring-c-green-200  hover:text-c-green-200">Sign Up</a>
        </div>
    </section>
   </nav>
  )
}

export  {Navbar}