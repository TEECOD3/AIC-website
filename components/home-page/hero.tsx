import Image from "next/image";
import Heroimageone from "@/public/images/AicHeroImage.png";
import Heroimagetwo from "@/public/images/AicHero2.png";
import { Button } from "../ui/button";
import { Play } from "../custom-icons/play";

function Hero() {
  return (
    <div className="min-h-screen lg:h-[880px] mx-auto flex max-w-[1948px] flex-col lg:flex-row relative">
      <div className=" h-full w-full flex flex-col lg:flex-row relative">
        <div className="w-full  h-[700px] lg:h-full py-28 lg:flex-1"></div>

        <div className="w-full lg:w-[55%] h-[500px] lg:h-full flex lg:justify-end relative ">
          <div className=" w-full lg:w-[75%] bg-light_blue h-full" />
          <div className="absolute top-[-28%] lg:top-[15%] left-0 z-[12] px-3">
            <div className="w-[300px] h-[360px] md:h-[550px] md:w-[509px] relative">
              <Image
                src={Heroimageone}
                alt="Ais Heroimage"
                className="object-cover h-full w-full"
                fill
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-[5%] right-0 max-sm:px-3 bg-red-400">
            <div className="max-[340px]:w-[200px] w-[289px] sm:w-[400px] h-[300px] md:h-[600px] lg:h-[620px] md:w-[509px] relative">
              <Image
                src={Heroimagetwo}
                alt="Ais Heroimage"
                className="object-cover h-full w-full"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full  py-28 flex max-lg:mt-10 lg:items-center">
        <div className="container mx-auto">
          <div className="max-w-[517px] ">
            <div className="">
              <h2 className="text-4xl md:text-[56px] md:leading-[52.8px] font-milik">
                A Different <br /> Kind Of <br />{" "}
              </h2>
              <p className="bg-[#A6D0B0] py-4 px-2 mt-1 max-w-max lg:leading-[40px] text-4xl md:text-[56px] md:leading-[52.8px] font-milik">
                Excellence
              </p>
            </div>

            <div className="mt-8 lg:mt-20 lg:max-w-[80%] text-dark_jungle_green text-base md:text-[18px]  lg:leading-[28.28px]">
              <div className=" w-[70px] lg:w-[100px] h-[2px] bg-water-blue my-4"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Velit ligula pretium id
                eget amet. Senectus nulla tincidunt placerat non facilisi diam.{" "}
              </p>
              <div className="flex gap-x-2 mt-10">
                <Button className="px-6 h-[45px] bg-water-blue font-semibold">
                  Contact us
                </Button>
                <Button className="flex gap-x-2 items-center bg-transparent px-6 h-[45px] text-water-blue font-semibold hover:bg-transparent">
                  <span>Learn more</span>{" "}
                  <div className="size-[24px] rounded-full bg-water-blue flex items-center justify-center">
                    <Play />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
