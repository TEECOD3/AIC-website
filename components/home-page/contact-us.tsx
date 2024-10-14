import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import contactImage from "@/public/images/kidimage.png";

function ContactUs() {
  return (
    <section className="py-10 lg:py-20 bg-water-blue">
      <div className="flex flex-col lg:flex-row container mx-auto gap-y-16">
        <div className="flex items-center justify-center w-full">
          <div className="text-center space-y-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white font-milik">
              Tap To Make Enquires About Our School
            </h2>

            <p className="text-white lg:text-[18px] lg:max-w-[60%] mx-auto">
              Thank you for inquiring into our school. Before we get started,
              let&apos;s get your full name and email address.
            </p>

            <div className="gap-y-5 flex flex-col lg:max-w-[70%]  mx-auto">
              <input
                className="border-white bg-transparent border-[1px] h-[45px] outline-none text-white placeholder:text-white/60 px-3"
                placeholder="First Name"
              />
              <input
                className="border-white bg-transparent border-[1px] h-[45px] outline-none placeholder:text-white/60 px-3 "
                placeholder="Email Address"
              />
              <Button className="bg-white text-water-blue hover:bg-white font-semibold w-[240px] py-6 px-10 mx-auto ">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center px-3">
          <div className="h-[400px] sm:h-[500px] w-[403px] relative rotate-6">
            <Image
              src={contactImage}
              alt="founder-image"
              className="object-cover h-full w-full"
              priority
              loading="eager"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
