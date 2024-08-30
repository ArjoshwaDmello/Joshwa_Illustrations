import Image from "next/image";
import dynamic from "next/dynamic";
import Architecture from "@assets/images/Architecture/29.jpg";
import Interior from "@assets/images/Interior/frame.jpg";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className=" w-full ">
        <nav className=" text-center py-10 text-[#cf0038] text-3xl font-[400]">Ar. JOSHWA</nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  m-auto">
        <div className="col-span-1 flex items-center justify-center">
          <Link
            href={"/interior"}
            className="max-w-[330px] flex flex-col gap-[10px] grayscale-[60%] hover:grayscale-0"
          >
            <Image src={Interior} alt="Interior" className="w-full" />

            <p className="text-2xl font-bold text-[#2e0b0b]">Interior</p>
          </Link>
        </div>
        <div className="col-span-1 flex items-center justify-center ">
          <Link
            href={"/architecture"}
            className="max-w-[330px] flex flex-col gap-[10px] grayscale-[60%] hover:grayscale-0"
          >
            <Image src={Architecture} alt="Architecture" className="w-full" />
            <p className="text-2xl font-bold text-[#2e0b0b]">Architecture</p>
          </Link>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
