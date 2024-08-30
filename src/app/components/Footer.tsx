import Image from "next/image";
import React from "react";
import logo from "@assets/images/Council_of_Architecture_logo.jpg";
function Footer() {
  return (
    <div className=" flex flex-col gap-[10px] text-center text-[#cf0038] text-md font-[600]">
      <p className="tracking-wide">Contact no : 0490399649</p>
      <p className="tracking-wider">ar.joshwadmello@gmail.com</p>
      <div className="flex justify-center items-center">
        <Image alt="" src={logo} className="w-14 h-14" />
        <p>CA/2023/160563</p>
      </div>
    </div>
  );
}

export default Footer;
