import ContactUs from "@/components/home-page/contact-us";
import Founder from "@/components/home-page/founder";
import GradeLevels from "@/components/home-page/grade-levels";
import Hero from "@/components/home-page/hero";
import MoreAboutUs from "@/components/home-page/more-about-us";
import Scroller from "@/components/home-page/scroller";
import WhyChooseUs from "@/components/home-page/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Scroller />
      <Founder />
      <WhyChooseUs />
      <GradeLevels />
      <MoreAboutUs />
      {/* <ContactUs /> */}
    </main>
  );
}
