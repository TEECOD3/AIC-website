import Image from "next/image";
import React from "react";
import ClassRoomImage1 from "@/public/images/fac-ball.png";
import ClassRoomImage2 from "@/public/images/fac-clinic.png";
import ClassRoomImage4 from "@/public/images/fac-boarding.png";

function ClassRoomLook() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="relative h-56 lg:h-[500px] w-full  bg-water-blue flex items-center justify-center">
        <p className="font-milik text-2xl lg:text-4xl  text-white mx-auto text-center max-w-[60%] lg:leading-[50px]">
          Take A Look At Our Classrooms And Halls{" "}
        </p>
      </div>
      <div className="relative h-96 lg:h-[500px] w-full">
        <Image
          src={ClassRoomImage1}
          alt="Ais Newsletter Image"
          className="object-cover"
          fill
        />
      </div>
      <div className="relative h-96 lg:h-[500px] w-full">
        <Image
          src={ClassRoomImage2}
          alt="Ais Newsletter Image"
          className="object-cover"
          fill
        />
      </div>
      <div className="relative h-96 lg:h-[500px] w-full">
        <Image
          src={ClassRoomImage4}
          alt="Ais Newsletter Image"
          className="object-cover"
          fill
        />
      </div>
    </section>
  );
}

export default ClassRoomLook;
