import Image from "next/image";
import { Button } from "../ui/button";

function Founder() {
  return (
    <section className="py-10 container flex flex-col items-center text-center relative">
      <div className="absolute right-10 top-4">
        <div className=" w-[200px] lg:w-[707px] h-[400px] lg:h-[1000px] relative">
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

      <div className="relative z-[2]">
        <h3 className="font-bold text-[32px] lg:text-[40px] font-milik">
          Messsage from the founder
        </h3>
        <div className="space-y-4 lg:max-w-[65%] mx-auto my-4 lg:text-[18px]">
          <p>
            I am delighted to welcome you to a new and exciting school in the
            city of Abuja, the Federal Capital Territory Nigeria.
          </p>

          <p>
            First and foremost, I wish to thank the Almighty Allah for giving us
            the opportunity to serve our community through the establishment of
            this highly rated school here in Abuja.
          </p>
        </div>
        <Button className="px-6 h-[45px] bg-water-blue font-semibold my-10">
          Read More About Me
        </Button>
      </div>
      <div className="w-full lg:w-[600px] h-[600px] relative z-[2]">
        <Image
          src="/images/founderimage.png"
          alt="founder-image"
          className="object-cover h-full w-full"
          priority
          loading="eager"
          fill
        />
      </div>
    </section>
  );
}

export default Founder;
