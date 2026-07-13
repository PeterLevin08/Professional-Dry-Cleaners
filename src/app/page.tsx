import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { Specialty } from "@/components/site/specialty";
import { Process } from "@/components/site/process";
import { Why } from "@/components/site/why";
import { Gallery } from "@/components/site/gallery";
import { OurWork } from "@/components/site/our-work";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Visit } from "@/components/site/visit";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { MobileCallBar } from "@/components/site/mobile-call-bar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Specialty />
        <Process />
        <Why />
        <Gallery />
        <OurWork />
        <Testimonials />
        <Faq />
        <Visit />
        <Cta />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
