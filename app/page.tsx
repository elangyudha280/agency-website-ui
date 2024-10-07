import React from "react";

// import component
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <section className="relative font-poppins w-full h-[100vh] overflow-x-hidden overflow-auto border-2 border-red-500">
      {/*//! navbar */}
      <Navbar/>

      {/*//! CONTENT JUMBOTRON */}
      <section className="relative bg-c-slate-100 pt-[80px] pb-10 px-5">
        {/*//! CONTAINER JUMBOTRON */}
        <section className="mx-auto max-w-[1200px] border-2 border-red-500">

        </section>

      </section>
    </section>
  );
}
