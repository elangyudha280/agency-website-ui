import React from "react";

// import component
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <section className="relative w-full h-[100vh] overflow-x-hidden overflow-auto border-2 border-red-500">
      {/*//! navbar */}
      <Navbar/>
      
    </section>
  );
}
