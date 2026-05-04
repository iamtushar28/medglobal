import Cta from "@/app/components/Cta";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Quickfacts from "./components/Quickfacts";
import Studycost from "./components/Studycost";
import Admissioninfo from "./components/Admissioninfo";
import Faq from "./components/Faq";
import Footer from "@/app/components/Footer";
import Mobilecta from "@/app/components/Mobilecta";
import Visualcta from "./components/Visualcta";

export default function Home() {
    return (
        <>
            {/* section 1 */}
            <div className="h-32 w-full fixed top-0 left-0 right-0 z-40">
                <Cta />
                <Navbar />
            </div>

            {/* hero section */}
            <Hero />

            {/* section 2 */}
            <div className="w-full h-auto px-4 md:px-12 py-10 flex flex-col gap-14">
                <Quickfacts />
                <Studycost />
                <Admissioninfo />
                <Faq />
                <Visualcta />
            </div>

            <Footer />
            <Mobilecta />

        </>
    );
}
