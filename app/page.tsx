import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
      <Mission/>
      <Footer />
    </div>
  );
}
