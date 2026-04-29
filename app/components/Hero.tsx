import Image from 'next/image'
import React from 'react'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="relative h-screen w-full pt-12 overflow-hidden rounded-b-">

            {/* Background Image */}
            <Image
                src="/images/mbbscollege.png"
                alt="mbbs college in russia"
                fill
                className="object-cover object-top pt-12"
                priority
            />

            {/* LEFT WHITE GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/80 to-transparent" />

            {/* Optional: Content area */}
            <div className="relative z-20 h-full w-full pt-12 md:pt-20 flex items-center md:items-end justify-around px-4 md:px-12">

                <div className="w-full lg:max-w-[50%] md:py-10 flex flex-col gap-5">

                    {/* sub heading */}
                    <div className='max-w-fit px-4 py-1 text-sm md:text-base text-white bg-linear-to-r from-blue-700 to-blue-500 rounded-full'>
                        <p>Your Gateway to MBBS Abroad</p>
                    </div>

                    {/* heading */}
                    <div>
                        <h1 className="text-6xl font-bold">
                            Study{" "}
                            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                MBBS
                            </span>
                        </h1>
                        <h1 className="text-6xl font-bold">
                            Abroad Without
                        </h1>
                        <h1 className="text-6xl font-bold">
                            Donation
                        </h1>
                    </div>

                    {/* features */}
                    <div className='flex flex-col gap-2'>

                        <div className='flex gap-2 items-center'>
                            <div className='h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center'>
                                <IoShieldCheckmarkSharp size={18} color='#ffffff' />
                            </div>
                            <p className='md:text-lg font-semibold'>MCI/NMC Approved Universities</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center'>
                                <MdOutlineCurrencyRupee size={18} color='#ffffff' />
                            </div>
                            <p className='md:text-lg font-semibold'>Affordable Fees</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center'>
                                <BiSupport size={18} color='#ffffff' />
                            </div>
                            <p className='md:text-lg font-semibold'>Complete Admission Support</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className='w-fit px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg flex gap-3 items-center'>
                        Register Now
                        <FaArrowRightLong size={18} color='#ffffff' />
                    </button>

                </div>

                {/* mbbs students image */}
                <Image
                    src="/images/students.png"
                    alt="mbbs students"
                    height={400}
                    width={400}
                    className="hidden md:block object-cover h-124 w-auto"
                    priority
                />

                {/* visuals */}
                <div className='hidden md:flex h-32 w-20 px-4 bg-white shadow-sm rounded-xl flex-col justify-center items-center absolute right-20 top-40'>
                    {/* icon */}
                    <div className='h-10 w-10 text-2xl text-blue-600 flex justify-center items-center'>
                        <SlBadge />
                    </div>
                    <h4 className='text-xl font-semibold text-blue-500'>4+</h4>
                    <p className='text-xs text-zinc-600 text-center'>Years of Experience</p>
                </div>

            </div>

        </div>
    )
}

export default Hero