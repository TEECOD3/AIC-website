import Image from "next/image";
import React from "react";
import image from "@/public/images/fac-canteen.png";
import { Play } from "../custom-icons/playwhite";

function About() {
  return (
    <section className="min-h-screen w-full mt-10 lg:mt-28">
      <div className="h-96 lg:h-[600px] w-full relative">
        <Image
          src={image}
          alt="classroom-image"
          className="object-cover brightness-75"
          fill
        />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <div className="lg:max-w-[40%] max-w-[70%] flex-col items-center justify-center text-center flex gap-y-8">
            <Play className="size-10 lg:size-16" />
            <p className="font-milik text-2xl lg:text-4xl text-white">
              Learn More About our school experiences
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-16 flex justify-between container flex-col lg:flex-row gap-y-4">
        <div className="w-full ">
          <p className="lg:max-w-[65%] mx-auto font-milik text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien
            dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis
            sit sit ultrices tincidunt euismod luctus diam.
          </p>
        </div>

        <div className="w-full">
          <p className="lg:max-w-[50%] mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien
            dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis
            sit sit ultrices tincidunt euismod luctus diam.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
