import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { PenBox } from "lucide-react";
import React from "react";

function MoreAboutUs() {
  return (
    <section className="bg-merino py-16 ">
      <div className="container mx-auto">
        <div className="space-y-5">
          <p className=" text-2xl lg:text-4xl font-medium">More About us</p>
          <p className="text-3xl lg:text-5xl  font-semibold capitalize">
            why joined
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 mt-16">
          <BrandCoreComponent />
          <BrandCoreComponent />
          <BrandCoreComponent />
          <BrandCoreComponent />
        </div>
      </div>
    </section>
  );
}

export default MoreAboutUs;

function BrandCoreComponent() {
  return (
    <div className="flex gap-x-2">
      <div className=" w-[25%] lg:w-[15%] flex items-start ">
        <div className="size-16 rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <PenBox color="gray" className="text-gray-500" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-8 items-start">
        <h3 className="font-semibold text-xl lg:text-3xl">
          OUR MISSION STATEMENT
        </h3>
        <p className="lg:max-w-[80%]">
          People say creatives don&apos;t know how to have fun and we&apos;re
          always stuck to our screens, Come show them that we can party hard.
        </p>
        <div className=" text-[0.9rem] underline underline-offset-2 lg:text-[1rem] flex gap-x-2   text-[#7D00EB] items-center">
          <span>Learn more</span>
          <ArrowTopRightIcon className="size-6" />
        </div>
      </div>
    </div>
  );
}
