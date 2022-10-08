import React from "react";

export default function ArticCard(props) {
  return (
    <div className="lg:text-center">
      <h1 className="pt-16 text-[32px] leading-9 font-extrabold pb-[30px] md:text-5xl">
        {props.title}
      </h1>
      <article className="leading-[-0.5px] text-base md:text-lg lg:mx-72">
        {props.body}
      </article>
    </div>
  );
}
