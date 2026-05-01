import Cta from "@/app/components/Cta";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";


export default function Home() {
    return (
        <>
            {/* section 1 */}
            <div className="h-32 w-full fixed top-0 left-0 right-0 z-40">
                <Cta />
                <Navbar />
            </div>

            <Hero />

        </>
    );
}
