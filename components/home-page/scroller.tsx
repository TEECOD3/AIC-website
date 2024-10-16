import React from "react";
import Marquee from "react-fast-marquee";

function Scroller() {
  return (
    <div className=" my-6 lg:my-16 bg-aero-blue py-4 lg:py-6">
      <Marquee loop={0} autoFill>
        <div className="flex items-center gap-x-10 text-[2rem] lg:text-[4rem] font-bold font-milik ">
          <div className=" ml-10 text-muddy-waters">Equity.</div>
          <div className=" text-water-blue">Give.</div>
          <div className=" text-muted-blue ">Community.</div>
          <div className=" text-muddy-waters">Inclusiveness.</div>
          <div className=" text-muted-blue">Accessibility.</div>
        </div>
      </Marquee>
    </div>
  );
}

export default Scroller;
