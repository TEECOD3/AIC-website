import React from "react";
import Image from "next/image";
import Heroimage from "@/public/images/Heroimage.png";
import { Button } from "../ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <div className="bg-[#FDF9FF] min-h-screen pt-6 pb-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[33.315rem_1fr] gap-6 lg:gap-2  lg:h-[52.6875rem] w-full">
        <div className="h-full w-full bg-water-blue px-4 lg:px-10 py-16">
          <div className="flex flex-col gap-y-10 lg:gap-y-16">
            <div className="flex gap-x-2 items-center">
              <Button variant="outline">Nusery</Button>
              <Button variant="outline">Primary</Button>
              <Button variant="outline">Secondary</Button>
            </div>

            <h1 className="text-white text-[2rem] font-medium lg:leading-[38.2px] font-grotesk">
              AL-ANSAR CENTRE FOR <br /> COMPREHENSIVE <br /> EDUCATION (ACCE)
            </h1>

            <h2 className="font-bold text-[2.3rem] lg:text-[4.1rem]  lg:leading-[78.3px] text-white font-maison">
              Inspiring <br /> Excellence
            </h2>

            <div className=" text-[1.5rem] lg:text-[2rem] flex gapx-2 mt-44 text-white items-center">
              <span>Enroll Now</span>
              <ArrowTopRightIcon className="size-6 lg:size-10" />
            </div>
          </div>
        </div>
        <div className="w-full relative h-[432px] lg:h-full">
          <Image
            src={Heroimage}
            alt="Heroimage"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
