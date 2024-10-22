import Image from "next/image";
import React from "react";
import NewletterImage1 from "@/public/images/7.jpg";
import NewsletterImage2 from "@/public/images/2.jpg";
import { Button } from "../ui/button";

function Newsletter() {
  return (
    <section className="mx-auto container mt-10 lg:mt-16 ">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[40%] flex flex-col">
          <h2 className="font-bold text-xl lg:text-4xl font-milik w-[85%] lg:max-w-[60%] mx-auto text-center lg:leading-[51.8px]">
            Our Newsletters
          </h2>
          <div className="relative h-96 lg:h-[500px] w-full mt-10">
            <Image
              src={NewletterImage1}
              alt="Ais Newsletter Image"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col gap-y-4 mt-8 ">
            <h2 className="text-xl lg:text-2xl font-milik ">
              HACKING SKIN CARE - HOW TO TURN BACK THE CLOCK ON SKIN
            </h2>
            <p>
              Alright friends, it’s time to get glowing from home! Here is a
              list of skin must haves that frequently take 10 years off. How
              would I know? After running a spa in Southern California and
              sidelining as an actor and model - I learned a few tricks! I use
              these on myself and I used to use them on my clients.
            </p>
            <Button className="px-10 py-7 bg-water-blue max-w-max">
              Read more
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full h-96 lg:h-[850px] relative">
          <Image
            src={NewsletterImage2}
            alt="Ais Newsletter Image"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-16 relative">
        <div className="absolute right-16 top-4">
          <div className=" w-[200px] lg:w-[600px] h-[400px] lg:h-[700px] relative">
            <Image
              src="/svg/paths.svg"
              alt="founder-image"
              className="object-cotaib h-full w-full"
              priority
              loading="eager"
              fill
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10 relative z-[1]">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-y-4">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={NewletterImage1}
                    alt="Ais Newsletter Image"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="font-milik  px-2">
                  How to Overcome Your Self-Doubt and Claim Your Value in the
                  Marketplace
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="relative h-[250px] w-full ">
                  <Image
                    src={NewletterImage1}
                    alt="Ais Newsletter Image"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="font-milik  px-2">
                  How to Overcome Your Self-Doubt and Claim Your Value in the
                  Marketplace
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="relative h-[250px]  w-full ">
                  <Image
                    src={NewletterImage1}
                    alt="Ais Newsletter Image"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="font-milik  px-2">
                  How to Overcome Your Self-Doubt and Claim Your Value in the
                  Marketplace
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={NewletterImage1}
                    alt="Ais Newsletter Image"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="font-milik  px-2">
                  How to Overcome Your Self-Doubt and Claim Your Value in the
                  Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:w-[90%] mx-auto flex bg-[#DBECDF] font-milik p-6 lg:p-10 flex-col">
              <div className="">
                <p className="text-xl">More News</p>
                <div className="bg-neutral-400 w-full h-[1px] mt-4"></div>
              </div>
              <div className="flex flex-col gap-y-8 mt-4">
                <p className="text-xl">
                  Introducing Extended Student Support Services
                </p>
                <p className="font-proxima">JANUARY 2024</p>
                <div className="bg-neutral-400 w-full h-[1px] mt-2"></div>
              </div>
              <div className="flex flex-col gap-y-3 mt-4">
                <p className="text-xl">
                  Introducing Extended Student Support Services
                </p>
                <p className="font-proxima">JANUARY 2024</p>
                <div className="bg-neutral-400 w-full h-[1px] mt-2"></div>
              </div>
              <div className="flex flex-col gap-y-3 mt-4">
                <p className="text-xl">
                  Introducing Extended Student Support Services
                </p>
                <p className="font-proxima">JANUARY 2024</p>
                <div className="bg-neutral-400 w-full h-[1px] mt-2"></div>
              </div>
              <div className="flex flex-col gap-y-3 mt-4">
                <p className="text-xl">
                  Introducing Extended Student Support Services
                </p>
                <p className="font-proxima">JANUARY 2024</p>
                <div className="bg-neutral-400 w-full h-[1px] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
