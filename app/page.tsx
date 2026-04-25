import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Whychooseus from "./components/Whychooseus";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Whychooseus />
    </div>
  );
}
