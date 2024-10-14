"use client";
import firstimage from "@/public/images/childrenimage.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function GradeLevels() {
  return (
    <div className="container mx-auto py-16  lg:py-24 ">
      <div className="flex items-center justify-center">
        <h3 className="text-[35px] lg:text-[45px] font-milik">Grade Levels</h3>
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
            <div className="w-full flex items-center ">
              <div className="w-full h-[400px]  max-lg:mt-10 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                <div className="w-full flex-col flex gap-y-4">
                  <h3 className="text-[35px] lg:text-[45px] font-milik">
                    Nusery
                  </h3>
                  <p>(Ages 3 - 4)</p>

                  <p className="text-base lg:text-[18px] text-dark_jungle_green">
                    Early Years Foundation stage comprises Nursery 1, Nursery2
                    and Reception classes, starting at age 3. Here, learning is
                    completely experiential in abeautifully equipped,
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
              <div className="w-full h-[400px]  max-lg:mt-10 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                <div className="w-full flex-col flex gap-y-4">
                  <h3 className="text-[35px] lg:text-[45px] font-milik">
                    PRIMARY
                  </h3>
                  <p>(Ages 5-8) </p>

                  <p className="text-base lg:text-[18px] text-dark_jungle_green">
                    Early Years Foundation stage comprises Nursery 1, Nursery2
                    and Reception classes, starting at age 3. Here, learning is
                    completely experiential in abeautifully equipped,
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
              <div className="w-full h-[400px]  max-lg:mt-10 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                <div className="w-full flex-col flex gap-y-4">
                  <h3 className="text-[35px] lg:text-[45px] font-milik">
                    SECONDARY
                  </h3>
                  <p>(Ages 5-8) </p>

                  <p className="text-base lg:text-[18px] text-dark_jungle_green">
                    Early Years Foundation stage comprises Nursery 1, Nursery2
                    and Reception classes, starting at age 3. Here, learning is
                    completely experiential in abeautifully equipped,
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
              <div className="w-full h-[400px]  max-lg:mt-10 lg:h-[80%] p-6 lg:p-16 bg-white shadow-sm flex items-center">
                <div className="w-full flex-col flex gap-y-4">
                  <h3 className="text-[35px] lg:text-[45px] font-milik">
                    ADULTS & CHILDREN
                  </h3>
                  <p>(Ages 5-8) </p>

                  <p className="text-base lg:text-[18px] text-dark_jungle_green">
                    Early Years Foundation stage comprises Nursery 1, Nursery2
                    and Reception classes, starting at age 3. Here, learning is
                    completely experiential in abeautifully equipped,
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
  );
}
