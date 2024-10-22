import Image from "next/image";
import React from "react";
import Galleryimage1 from "@/public/images/7.jpg";
import Galleryimage2 from "@/public/images/1.jpg";
import Galleryimage3 from "@/public/images/3.jpg";
import Galleryimage4 from "@/public/images/cuteclass.jpg";

function Gallery() {
  return (
    <section className="py-20 container mx-auto">
      <div className="w-full flex items-center justify-center">
        <h2 className="font-bold text-xl lg:text-4xl font-milik w-[85%] lg:max-w-[60%] mx-auto text-center lg:leading-[51.8px]">
          Our Gallery
        </h2>
      </div>

      <div className="mt-6 lg:mt-10">
        <div className="grid-cols-1 lg:grid-cols-2 lg: gap-10 lg:gap-16 grid">
          <div className="w-full relative">
            <div className="relative h-96 lg:h-[500px] lg:w-[80%] mx-auto w-full mt-10">
              <Image
                src={Galleryimage1}
                alt="Ais Newsletter Image"
                className="object-cover"
                fill
              />
              <div className="rounded-full size-10 lg:size-16 absolute top-4 bg-water-blue    text-white right-4 flex items-center justify-center font-milik text-xl lg:text-2xl">
                <span>1</span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="relative h-96 lg:h-[500px] lg:w-[80%] mx-auto w-full mt-10">
              <Image
                src={Galleryimage4}
                alt="Ais Newsletter Image"
                className="object-cover"
                fill
              />
              <div className="rounded-full size-10 lg:size-16 absolute top-4 bg-water-blue    text-white right-4 flex items-center justify-center font-milik text-xl lg:text-2xl">
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="relative h-96 lg:h-[500px] lg:w-[80%] mx-auto w-full mt-10">
              <Image
                src={Galleryimage2}
                alt="Ais Newsletter Image"
                className="object-cover"
                fill
              />
              <div className="rounded-full size-10 lg:size-16 absolute top-4 bg-water-blue    text-white right-4 flex items-center justify-center font-milik text-xl lg:text-2xl">
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="relative h-96 lg:h-[500px] lg:w-[80%] mx-auto w-full mt-10">
              <Image
                src={Galleryimage3}
                alt="Ais Newsletter Image"
                className="object-cover"
                fill
              />
              <div className="rounded-full size-10 lg:size-16 absolute top-4 bg-water-blue    text-white right-4 flex items-center justify-center font-milik text-xl lg:text-2xl">
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
