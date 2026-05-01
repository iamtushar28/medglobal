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
import { IoLogoWhatsapp } from "react-icons/io";
import Mobilecta from "./components/Mobilecta";

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

      <Mobilecta />

      {/* talk to expert */}
      <div className='hidden md:flex w-36 md:w-44 h-12 md:h-14 pl-2 bg-white hover:bg-zinc-50 shadow border border-zinc-100 md:gap-2 justify-start items-center fixed bottom-6 md:bottom-10 right-0 z-40 rounded-l-full cursor-pointer'>

        {/* icon */}
        <div className='h-10 w-10 text-2xl md:text-3xl text-green-500 flex justify-center items-center'>
          <IoLogoWhatsapp />
        </div>

        <div>
          <h4 className='text-xs md:text-sm text-zinc-600'>Chat With</h4>
          <h4 className='-mt-1 text-sm font-semibold'>Our Experts</h4>
        </div>

      </div>
    </>
  );
}
