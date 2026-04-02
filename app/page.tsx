import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
