import React from "react";
import { BsShieldCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TbRouteSquare } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { IconType } from "react-icons";
import Image from "next/image";

type Feature = {
    icon: IconType;
    title1: string;
    title2: string;
};

// ✅ reusable card (inside same file)
const FeatureCard = ({
    icon: Icon,
    title1,
    title2,
}: Feature) => {
    return (
        <div className="w-36 h-36 md:w-28 md:h-32 bg-white shadow-sm rounded-2xl flex flex-col gap-3 justify-center items-center hover:shadow-md transition">
            <Icon className="text-3xl text-blue-500" />

            <div className="text-center">
                <h4 className="text-sm font-semibold">{title1}</h4>
                <h4 className="text-sm font-semibold">{title2}</h4>
            </div>
        </div>
    );
};

const Aboutus = () => {

    // ✅ array inside component
    const features: Feature[] = [
        {
            icon: BsShieldCheck,
            title1: "100%",
            title2: "Transparency",
        },
        {
            icon: FaRegUser,
            title1: "Expert",
            title2: "Counselors",
        },
        {
            icon: TbRouteSquare,
            title1: "Personalized",
            title2: "Guidance",
        },
        {
            icon: PiStudentFill,
            title1: "Student First",
            title2: "Approach",
        },
    ];

    return (
        <div className="h-auto w-full md:px-12 flex flex-col-reverse md:flex-row gap-6 md:gap-8">

            {/* image */}
            <div className="w-full md:w-[42%] overflow-hidden rounded-2xl">
                <Image
                    src={"/images/about.png"}
                    alt="about us"
                    width={400}
                    height={400}
                    className="w-full object-contain"
                />
            </div>

            {/* content */}
            <div className="flex flex-col gap-4">

                {/* title */}
                <div className="w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full">
                    About Us
                </div>

                {/* heading */}
                <h2 className="text-3xl font-semibold">
                    About Med Global Education
                </h2>

                {/* text */}
                <p className="max-w-xl text-zinc-700">
                    Med Global Education (A Unit of Mahajan Educon LLP) helps students secure MBBS admissions in top international universities with complete transparency and guidance.
                </p>

                {/* features */}
                <div className="flex gap-4 flex-wrap justify-center items-center">
                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aboutus;