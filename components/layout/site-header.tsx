import Image from "next/image";
import React from "react";
import Logo from "@/public/svg/AicLogo.svg";
import AboutUsIcon from "../custom-icons/about-us-icon";
import { Profile } from "../custom-icons/profile";
import { Target } from "../custom-icons/target";
import { Menu } from "../custom-icons/Menu";

function SiteHeader() {
  return (
    <header className="py-4 fixed w-full bg-white z-[100]">
      <div className="flex items-center justify-between container  mx-auto ">
        <Image
          src={Logo}
          alt="AIC logo"
          height={120}
          width={120}
          className="lg:h-[62.97px] lg:w-[78.47px] size-[60px]"
        />
        <nav>
          <ul className="lg:flex justify-between uppercase max-w-[380px] w-[490px] text-base hidden leading-[19.2px]">
            {React.Children.toArray(
              navbarLinks.map((links) => (
                <li className="flex items-center gap-x-2 cursor-pointer">
                  <span>{links.label}</span>
                </li>
              ))
            )}
          </ul>
        </nav>
        <div className="block lg:hidden">
          <Menu className="size-10" />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;

const navbarLinks = [
  {
    id: 1,
    label: "about us",
    icons: <AboutUsIcon className="size-6" />,
  },
  {
    id: 3,
    label: "Career",
    icons: <Target className="size-6" />,
  },
  {
    id: 2,
    label: "portals",
    icons: <Profile className="size-6" />,
  },
];
