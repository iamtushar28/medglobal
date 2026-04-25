import Image from 'next/image'
import React from 'react'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="relative h-screen w-full overflow-hidden rounded-b-">

            {/* Background Image */}
            <Image
                src="/images/mbbscollege.png"
                alt="mbbs college in russia"
                fill
                className="object-cover object-top mt-6"
                priority
            />

            {/* LEFT WHITE GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/80 to-transparent" />

            {/* Optional: Content area */}
            <div className="relative z-20 h-full w-full pt-20 flex items-center px-12">

                <div className="max-w-[50%] flex flex-col gap-5">

                    {/* sub heading */}
                    <div className='max-w-fit px-4 py-1 text-white bg-linear-to-r from-blue-700 to-blue-500 rounded-full'>
                        <p>Your Gateway to MBBS Abroad</p>
                    </div>

                    {/* heading */}
                    <div>
                        <h1 className="text-6xl font-bold">
                            Study <span className='text-blue-600'>MBBS</span>
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
                            <p className='text-lg font-semibold'>MCI/NMC Approved Universities</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center'>
                                <MdOutlineCurrencyRupee size={18} color='#ffffff' />
                            </div>
                            <p className='text-lg font-semibold'>Affordable Fees</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center'>
                                <BiSupport size={18} color='#ffffff' />
                            </div>
                            <p className='text-lg font-semibold'>Complete Admission Support</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className='w-fit px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full flex gap-3 items-center'>
                        Register Now
                        <FaArrowRightLong size={18} color='#ffffff' />
                    </button>

                </div>

                {/* mbbs students image */}
                <div>

                    <Image
                        src="/images/students.png"
                        alt="mbbs students"
                        height={400}
                        width={400}
                        className="object-cover h-124 w-auto absolute bottom-0 right-10"
                        priority
                    />

                </div>

            </div>

        </div>
    )
}

export default Hero