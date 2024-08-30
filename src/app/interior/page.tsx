"use client";
import React, { useState } from "react";
import { InteriorImages } from "./interior";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

function Page() {
  const [state, setState] = useState(InteriorImages);

  return (
    <>
      <header className="fixed w-full top-0 left-0 bg-white z-10">
        <div className="text-center py-8 text-[#cf0038] text-3xl font-[400]">
          <Link href="/">Ar. JOSHWA</Link>
        </div>
      </header>

      <main className="pt-24">
        {" "}
        {/* Adjust top padding to ensure content is below the fixed header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {state.map((ele, index) => (
            <div
              key={index}
              className="col-span-1 hover:shadow-custom-light transition-[box-shadow 0.3s ease-in, opacity 0.3s ease-in]"
            >
              <Image
                src={ele}
                alt={`Interior${index}`}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
