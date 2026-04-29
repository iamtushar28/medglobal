import React from 'react'
import { BsShieldCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TbRouteSquare } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";

type Props = {}

const Aboutus = (props: Props) => {
    return (
        <div className='h-auto w-full px-12 flex gap-6'>

            {/* visual image */}
            <div className='h-60 w-[40%] border border-zinc-100'></div>

            {/* main section */}
            <div className='flex flex-col gap-4'>

                {/* title */}
                <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                    About Us
                </div>

                {/* heading */}
                <h2 className='text-3xl font-semibold'>About Med Global Education</h2>

                {/* about */}
                <p className='max-w-xl text-zinc-700'>Med Global Education (A Unit of Mahajan Educon LLP) helps students secure MBBS admissions in top international universities with complete transparency and guidance.</p>

                {/* features */}
                <div className='flex gap-5'>


                    <div className='w-28 h-32 bg-white shadow-sm rounded-2xl flex flex-col gap-3 justify-center items-center'>

                        <BsShieldCheck className='text-3xl text-blue-500' />

                        <div className='text-center'>
                            <h4 className='text-sm font-semibold'>100%</h4>
                            <h4 className='text-sm font-semibold'>Transparency</h4>
                        </div>

                    </div>
                    <div className='w-28 h-32 bg-white shadow-sm rounded-2xl flex flex-col gap-3 justify-center items-center'>

                        <FaRegUser className='text-3xl text-blue-500' />

                        <div className='text-center'>
                            <h4 className='text-sm font-semibold'>Expert</h4>
                            <h4 className='text-sm font-semibold'>Counselors</h4>
                        </div>

                    </div>
                    <div className='w-28 h-32 bg-white shadow-sm rounded-2xl flex flex-col gap-3 justify-center items-center'>

                        <TbRouteSquare className='text-3xl text-blue-500' />

                        <div className='text-center'>
                            <h4 className='text-sm font-semibold'>Personalized</h4>
                            <h4 className='text-sm font-semibold'>Guidance</h4>
                        </div>

                    </div>
                    <div className='w-28 h-32 bg-white shadow-sm rounded-2xl flex flex-col gap-3 justify-center items-center'>

                        <PiStudentFill className='text-3xl text-blue-500' />

                        <div className='text-center'>
                            <h4 className='text-sm font-semibold'>Student First</h4>
                            <h4 className='text-sm font-semibold'>Approach</h4>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Aboutus