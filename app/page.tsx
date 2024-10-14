import ContactUs from "@/components/home-page/contact-us";
import Founder from "@/components/home-page/founder";
import GradeLevels from "@/components/home-page/grade-level";
import Hero from "@/components/home-page/hero";
import Scroller from "@/components/home-page/scroller";

export default function Home() {
  return (
    <main className="bg-[#FIFFF4]">
      <Hero />
      <Scroller />
      <Founder />
      <ContactUs />
      <GradeLevels />
      {/*
      <WhyChooseUs />
      <GradeLevels />
      <MoreAboutUs /> */}
      {/* <ContactUs /> */}
    </main>
  );
}
