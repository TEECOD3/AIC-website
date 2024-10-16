"use client";
import firstimage from "@/public/images/childrenimage.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function GradeLevels() {
  return (
    <section className="flex flex-col gap-y-8 lg:gap-y-16">
      <div className="container mx-auto py-16  lg:py-24 ">
        <div className="flex items-center justify-center">
          <h3 className="text-[35px] lg:text-[45px] font-milik">
            Grade Levels
          </h3>
        </div>

        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-8 mt-10 relative min-h-screen lg:h-[600px]">
            <div className="w-full flex lg:h-full flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] h-[450px] lg:h-full relative">
                <Image
                  src={firstimage}
                  alt="GradeLevels image"
                  className="h-full w-full object-cover"
                  fill
                  priority
                />
              </div>
              <div className="lg:flex-1 h-[400px] lg:h-full"></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row ">
              <div className="w-full h-[600px] lg:h-full"></div>
              <div className="w-full flex items-center max-lg:mt-10">
                <div className="w-full max-[480px]:h-[380px] h-[350px]    max-sm:mt-10 max-lg:mt-32 lg:h-[80%] p-6 lg:p-16  bg-white shadow-sm flex items-center">
                  <div className="w-full flex-col flex gap-y-4">
                    <h3 className="text-[35px] lg:text-[45px] font-milik">
                      Nusery
                    </h3>
                    <p>(Ages 3 - 4)</p>

                    <p className="text-base lg:text-[18px] text-dark_jungle_green">
                      Early Years Foundation stage comprises Nursery 1, Nursery2
                      and Reception classes, starting at age 3. Here, learning
                      is completely experiential in abeautifully equipped,
                      technological and resource-filled environment
                    </p>

                    <Button className="px-10 py-7 bg-water-blue max-w-max">
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-10 relative min-h-screen lg:h-[600px]">
            <div className="w-full flex lg:h-full flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] h-[450px] lg:h-full relative">
                <Image
                  src={firstimage}
                  alt="GradeLevels image"
                  className="h-full w-full object-cover"
                  fill
                  priority
                />
              </div>
              <div className="lg:flex-1 h-[400px] lg:h-full"></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row ">
              <div className="w-full h-[600px] lg:h-full"></div>
              <div className="w-full flex items-center ">
                <div className="w-full max-[480px]:h-[380px] h-[350px]    max-sm:mt-10 max-lg:mt-32 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                  <div className="w-full flex-col flex gap-y-4">
                    <h3 className="text-[35px] lg:text-[45px] font-milik">
                      PRIMARY
                    </h3>
                    <p>(Ages 5-8) </p>

                    <p className="text-base lg:text-[18px] text-dark_jungle_green">
                      Early Years Foundation stage comprises Nursery 1, Nursery2
                      and Reception classes, starting at age 3. Here, learning
                      is completely experiential in abeautifully equipped,
                      technological and resource-filled environment
                    </p>

                    <Button className="px-10 py-7 bg-water-blue max-w-max">
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-10 relative min-h-screen lg:h-[600px]">
            <div className="w-full flex lg:h-full flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] h-[450px] lg:h-full relative">
                <Image
                  src={firstimage}
                  alt="GradeLevels image"
                  className="h-full w-full object-cover"
                  fill
                  priority
                />
              </div>
              <div className="lg:flex-1 h-[400px] lg:h-full"></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row ">
              <div className="w-full h-[600px] lg:h-full"></div>
              <div className="w-full flex items-center ">
                <div className="w-full max-[480px]:h-[380px] h-[350px]    max-sm:mt-10 max-lg:mt-32 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                  <div className="w-full flex-col flex gap-y-4">
                    <h3 className="text-[35px] lg:text-[45px] font-milik">
                      SECONDARY
                    </h3>
                    <p>(Ages 5-8) </p>

                    <p className="text-base lg:text-[18px] text-dark_jungle_green">
                      Early Years Foundation stage comprises Nursery 1, Nursery2
                      and Reception classes, starting at age 3. Here, learning
                      is completely experiential in abeautifully equipped,
                      technological and resource-filled environment
                    </p>

                    <Button className="px-10 py-7 bg-water-blue max-w-max">
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-10 relative min-h-screen lg:h-[600px]">
            <div className="w-full flex lg:h-full flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] h-[450px] lg:h-full relative">
                <Image
                  src={firstimage}
                  alt="GradeLevels image"
                  className="h-full w-full object-cover"
                  fill
                  priority
                />
              </div>
              <div className="lg:flex-1 h-[400px] lg:h-full"></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row ">
              <div className="w-full h-[600px] lg:h-full"></div>
              <div className="w-full flex items-center ">
                <div className="w-full max-[480px]:h-[380px] h-[350px]   max-lg:mt-32 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                  <div className="w-full flex-col flex gap-y-4">
                    <h3 className=" max-[480px]:text-[25px] text-[35px] lg:text-[45px] font-milik">
                      ADULTS & CHILDREN
                    </h3>
                    <p>(Ages 5-8) </p>

                    <p className="text-base lg:text-[18px] text-dark_jungle_green">
                      Early Years Foundation stage comprises Nursery 1, Nursery2
                      and Reception classes, starting at age 3. Here, learning
                      is completely experiential in abeautifully equipped,
                      technological and resource-filled environment
                    </p>

                    <Button className="px-10 py-7 bg-water-blue max-w-max">
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <p className="font-bold text-xl lg:text-4xl font-milik w-[85%] lg:max-w-[60%] mx-auto text-center lg:leading-[51.8px]">
          The figures presented as humble brags serve as evidence of the
          remarkable achievements that can be accomplished through unwavering
          dedication.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-10 lg:mt-16">
          <div className="flex flex-col gap-y-5 text-center lg:flex-1">
            <h2 className="text-3xl lg:text-5xl font-milik">60+</h2>
            <p className="max-w-[70%] mx-auto">
              Nationalities represented by our AIS families, faculty and staff
            </p>
          </div>
          <div className="flex flex-col gap-y-5 text-center lg:flex-1">
            <h2 className="text-3xl lg:text-5xl font-milik">70%</h2>
            <p className="max-w-[70%] mx-auto">
              Of faculty hold a master’s degree or higher
            </p>
          </div>
          <div className="flex flex-col gap-y-5 text-center lg:flex-1">
            <h2 className="text-3xl lg:text-5xl font-milik">70%</h2>
            <p className="max-w-[70%] mx-auto">
              Of graduating Seniors admitted into one of their top 3
              colleges/Universities
            </p>
          </div>
          <div className="flex flex-col gap-y-5 text-center lg:flex-1">
            <h2 className="text-3xl lg:text-5xl font-milik">72%</h2>
            <p className="max-w-[70%] mx-auto">
              Average ratio of students to experienced international faculty and
              staff
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
