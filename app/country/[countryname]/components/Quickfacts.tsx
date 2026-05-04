import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { HiCheckBadge } from 'react-icons/hi2'
import { IoLanguage } from 'react-icons/io5'
import { LuCalendarCheck } from 'react-icons/lu'
import { MdOutlineWatchLater } from 'react-icons/md'

type Props = {}

const Quickfacts = (props: Props) => {
    return (
        <div className='h-auto w-full p-4 md:p-6 text-white bg-linear-to-r from-blue-500 to-indigo-500 rounded-lg flex flex-col gap-4'>

            {/* title */}
            <h2 className='text-xl font-semibold'>MBBS in Russia - Quick Facts</h2>

            {/* facts */}
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row md:justify-around md:items-center'>

                {/* facts card */}
                <div className='flex gap-4 items-center'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <MdOutlineWatchLater />
                    </div>

                    <div>

                        <h4>Duration</h4>
                        <h2 className='text-xl font-semibold'>6 Years</h2>
                        <p className='text-sm text-white/80'>(5+1 Internship)</p>

                    </div>

                </div>

                {/* devider */}
                <div className='hidden md:block h-14 w-px bg-white/70'></div>

                {/* facts card */}
                <div className='flex gap-4 items-center'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <FaRegUser />
                    </div>

                    <div>

                        <h4>Eligibility</h4>
                        <h2 className='text-xl font-semibold'>60% in PCB</h2>
                        <p className='text-sm text-white/80'>(General Category)</p>

                    </div>

                </div>

                {/* devider */}
                <div className='hidden md:block h-14 w-px bg-white/70'></div>

                {/* facts card */}
                <div className='flex gap-4 items-center'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <HiCheckBadge />
                    </div>

                    <div>

                        <h4>NEET</h4>
                        <h2 className='text-xl font-semibold'>NEET Qualified</h2>
                        <p className='text-sm text-white/80'>(Mandatory)</p>

                    </div>

                </div>

                {/* devider */}
                <div className='hidden md:block h-14 w-px bg-white/70'></div>

                {/* facts card */}
                <div className='flex gap-4 items-center'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <IoLanguage />
                    </div>

                    <div>

                        <h4>Medium</h4>
                        <h2 className='text-xl font-semibold'>English</h2>
                        <p className='text-sm text-white/80'>(Full Course)</p>

                    </div>

                </div>

                {/* devider */}
                <div className='hidden md:block h-14 w-px bg-white/70'></div>

                {/* facts card */}
                <div className='flex gap-4 items-center'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <LuCalendarCheck />
                    </div>

                    <div>

                        <h4>Intake</h4>
                        <h2 className='text-xl font-semibold'>September</h2>
                        <p className='text-sm text-white/80'>(Main Intake)</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Quickfacts