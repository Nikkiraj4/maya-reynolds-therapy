import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Approach from "@/components/Approach/Approach";
import Support from "@/components/Support/Support";
import Expect from "@/components/Expect/Expect";
import FAQ from "@/components/FAQ/FAQ";
import OurOffice from "@/components/OurOffice/OurOffice";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Approach />

        <Support />

        <Expect />

        <FAQ />

        <OurOffice />

        <Contact />
      </main>

      <Footer />
    </>
  );
}