import React from "react";
import Bitmap from "../assets/Bitmap.png";

export default function Header() {
  return (
    <div className="bg-white pl-6 p-4 md:pl-20 lg:p-2 lg:pl-52 ">
      <div className=" flex items-center md:max-w-md lg:max-w-7xl xl:mx-auto">
        <img src={Bitmap} alt="ico" className="w-10 h-10 mr-2 lg:w-8 lg:h-8" />
        <div className="font-WorkSans text-xs text-black leading-3">
          Good Morning
          <br />
          <span className="text-base font-bold text-black">Fallas</span>
        </div>
      </div>
    </div>
  );
}
