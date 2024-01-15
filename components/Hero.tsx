import Image from "next/image";
import React from "react";
import { Button } from "@/components";

const Hero = () => {
  return (
    <section id="hero" className="mt-12">
      <div className="flex flex-col gap-16 items-center justify-center mt-14">
        <h1 className="font-bold text-2xl text-center px-10 leading-[29px] ">
          До твоєї кращої англійскої залишився один крок!
        </h1>
        <Image src="/logo.svg" width={218} height={133} alt="logo" />
        <Button
          title="Пройти Тест"
          containerStyles="w-[283px] mx-auto h-[64px]"
          textStyles="font-[600] text-[22px]"
          // handleClick={() => setIsOpen(true)}
        />
      </div>
    </section>
  );
};

export default Hero;
