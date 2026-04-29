import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Whychooseus from "./components/Whychooseus";
import Topdestination from "./components/Topdestination";
import Truststat from "./components/Truststat";
import Contactus from "./components/Contactus";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <>
      {/* section 1 */}
      <div className="h-32 w-full fixed top-0 left-0 right-0 z-40">
        <Cta />
        <Navbar />
      </div>
      <Hero />
      {/* section 2 */}
      <div className="w-full h-auto px-4 py-10 flex flex-col gap-14">
        <Aboutus />
        <Whychooseus />
        <Topdestination />
        <Truststat />
        <Reviews />
        <Contactus />
      </div>
      <Footer />
    </>
  );
}
