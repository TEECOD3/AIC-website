import React from "react";
import Customtabs from "../ui/custom-tabs";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function WhyChooseUs() {
  return (
    <section className="bg-merino py-10 lg:py-16">
      <div className="container">
        <div className="">
          <p className="text-2xl lg:text-4xl font-semibold text-[#00A859]">
            <span className="stroke-text mr-2">Here</span> are some
            <span className="ml-2 stroke-text">of the reason</span> <br />{" "}
            <span className="italic mr-2 font-medium">why</span>
            <span>you Choose Our School</span>
          </p>
        </div>

        <Customtabs />
        <div className=" text-[0.9rem] underline underline-offset-2 lg:text-[1.5rem] flex gap-x-2  lg:mt-20 text-water-blue items-center">
          <span>Enroll Now</span>
          <ArrowTopRightIcon className="size-6" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
