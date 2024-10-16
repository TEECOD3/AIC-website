import About from "@/components/home-page/about";
import ClassRoomLook from "@/components/home-page/classroom-look";
import ContactUs from "@/components/home-page/contact-us";
import Founder from "@/components/home-page/founder";
import Gallery from "@/components/home-page/gallery";
import GradeLevels from "@/components/home-page/grade-level";
import Hero from "@/components/home-page/hero";
import Newsletter from "@/components/home-page/news-letter";
import Scroller from "@/components/home-page/scroller";

export default function Home() {
  return (
    <main className="bg-[#FIFFF4]">
      <Hero />
      <Scroller />
      <Founder />
      <ContactUs />
      <GradeLevels />
      <About />
      <Newsletter />
      <Gallery />
      <ClassRoomLook />
    </main>
  );
}
