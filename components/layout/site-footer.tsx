import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MailIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/Logo.png";

function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#88C196] py-10 lg:py-20 ">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-[40%_1fr_1fr] gap-y-10">
        <div className="flex flex-col gap-y-10">
          <div className="">
            <h4 className="text-white font-milik text-sm lg:text-[20px]">
              WANT T0 KNOW MORE?
            </h4>
            <div className="flex items-center gap-x-1 text-sm mt-4">
              <span className="text-white">Reach out</span>
              <ArrowUpRight color="#fff" />
            </div>
          </div>
          <Image
            src={Logo}
            alt="AIC logo"
            height={700}
            width={1000}
            className="lg:h-[100.97px] lg:w-[100.47px] size-[60px] object-contain hidden lg:block"
          />
        </div>
        <div className="flex-col flex">
          <h4 className="text-white font-milik text-base lg:text-[20px]">
            Navigations
          </h4>
          <ul className="text-white space-y-4 lg:space-y-6 mt-4 max-md:text-sm">
            <li>About us</li>
            <li>Career</li>
            <li>Founder Message</li>
            <li>Portals</li>
          </ul>
        </div>

        <div className="lg:hidden">
          <Image
            src={Logo}
            alt="AIC logo"
            height={700}
            width={1000}
            className="lg:h-[100.97px] lg:w-[100.47px] size-[80px] object-contain lg:hidden"
          />
        </div>

        <div className="flex-col flex justify-between gap-6">
          <h4 className="text-white font-milik text-base lg:text-[20px]">
            About us
          </h4>
          <p className="text-white max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur. Tellus cursus iaculis
            fermentum sit.
          </p>

          <div className="flex gap-x-10 lg:mt-26">
            <Facebook color="#fff" className="max-lg:size-5" />
            <Instagram color="#fff" className="max-lg:size-5" />
            <Twitter color="#fff" className="max-lg:size-5" />
            <MailIcon color="#fff" className="max-lg:size-5" />
          </div>
          <div className="text-white text-semibold text-[12px]">
            &copy; Copyright {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
