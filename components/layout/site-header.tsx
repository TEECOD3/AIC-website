import Image from "next/image";
import React from "react";
import Logo from "@/public/svg/AicLogo.svg";
import AboutUsIcon from "../custom-icons/about-us-icon";
import { Profile } from "../custom-icons/profile";
import { Target } from "../custom-icons/target";

function SiteHeader() {
  return (
    <header className="container flex items-center justify-between mx-auto">
      <Image src={Logo} alt="AIC logo" height={120} width={120} />
      <nav>
        <ul className="lg:flex justify-between uppercase max-w-[490px] w-[490px] text-base font-medium hidden">
          {React.Children.toArray(
            navbarLinks.map((links) => (
              <li className="flex items-center gap-x-2">
                <span>{links.icons}</span>
                <span>{links.label}</span>
              </li>
            ))
          )}
        </ul>
      </nav>
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
