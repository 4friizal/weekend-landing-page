import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function CardTips(props) {
  return (
    <div
      className="mb-3 relative lg:mx-2 lg:w-[311px] lg:h-[176px] bg-black overflow-hidden group"
      data-aos="zoom-in"
    >
      <div className="lg:hover:opacity-50">
        <img
          src={props.img}
          alt="This Pict"
          className="lg:absolute lg:group-hover:scale-125 transition-all duration-500 "
        />
        <div className="absolute bottom-0 w-full h-20 bg-black/50 flex justify-around items-center md:justify-between md:px-10 lg:px-0">
          <p className="font-WorkSans text-base font-extrabold w-56 ml-6">
            {props.title}
          </p>
          <div className=" mr-5 bg-white w-8 h-8 rounded-full text-[#0B24FB] flex justify-center items-center">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
