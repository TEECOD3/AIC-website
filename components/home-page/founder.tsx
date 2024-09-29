import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

function Founder() {
  return (
    <section className="py-10 container">
      <div className="h-[520px] w-full flex flex-col lg:flex-row border-[2px]  border-water-blue ">
        <div className="w-full max-lg:h-[231px] flex items-center justify-center flex-col text-center max-lg:py-4">
          <div className="relative size-[140px] lg:size-[300px] rounded-full overflow-hidden">
            <Image
              src="/images/founderimage.png"
              alt="founder-image"
              className="object-cover h-full w-full object-top"
              priority
              loading="eager"
              fill
            />
          </div>
          <div className="">
            <p className="font-semibold mt-4 font-maison underline underline-offset-4 decoration-[4px] text-[19.4px] lg:text-[40px] lg:leading-[40px] text-water-blue">
              Message From the founder
            </p>
            <p>message from the founder</p>
          </div>
        </div>
        <div className="w-full bg-water-blue max-lg:h-[313px] flex text-base text-white lg:text-[20px] lg:leading-[40.6px] flex-col gap-y-6 px-5 lg:px-10 py-8 lg:py-20">
          <p>
            I am delighted to welcome you to a new and exciting school in the
            city of Abuja, the Federal Capital Territory Nigeria.
          </p>
          <p>
            First and foremost, I wish to thank the Almighty Allah for giving us
            the opportunity to serve our community through the establishment of
            this highly rated school here in Gwarimpa.{" "}
          </p>
          <div className=" text-[0.9rem] underline underline-offset-2 lg:text-[1rem] flex gap-x-2  lg:mt-20 text-white items-center">
            <span>Read more</span>
            <ArrowTopRightIcon className="size-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
