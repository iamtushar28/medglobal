import Image from 'next/image'
import React from 'react'
import { HiMiniCheckCircle } from 'react-icons/hi2'

type Props = {}

const Admissioninfo = (props: Props) => {
    return (
        <div className='w-full h-auto flex flex-col gap-6 md:gap-0 md:flex-row justify-between'>

            {/* eligibility criteria card */}
            <div className='h-auto w-full md:w-[48%] pb-18 p-4 bg-blue-50 rounded-lg flex flex-col gap-4 relative overflow-hidden'>

                {/* title */}
                <h2 className='text-xl font-semibold text-blue-600'>Eligibility Criteria</h2>

                {/* criteria list */}
                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <HiMiniCheckCircle className='text-xl text-blue-600' />
                        <p>Minimum 60% marks in PCB in 12th</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <HiMiniCheckCircle className='text-xl text-blue-600' />
                        <p>NEET qualification is mandatory</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <HiMiniCheckCircle className='text-xl text-blue-600' />
                        <p>Age must be 18 years old or above before admission</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <HiMiniCheckCircle className='text-xl text-blue-600' />
                        <p>Valid Passport</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <HiMiniCheckCircle className='text-xl text-blue-600' />
                        <p>Student must be medically fit</p>
                    </div>

                </div>

                {/* clipboard image */}
                <Image
                    src={'/images/clipboard.png'}
                    alt='clipboard image'
                    height={200}
                    width={150}
                    className='h-20 w-22 md:h-44 md:w-44 absolute right-0 -bottom-3 md:-bottom-5'
                />

            </div>

            {/* admission process card */}
            <div className='h-auto w-full md:w-[48%] p-4 bg-blue-50 rounded-lg flex flex-col gap-4'>

                {/* title */}
                <h2 className='text-xl font-semibold text-blue-600'>Admission Process</h2>

                {/* process list */}
                <div className='flex flex-col gap-3'>

                    {/* step 1 */}
                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <div className='min-h-8 min-w-8 text-white font-semibold bg-blue-600 rounded-full flex justify-center items-center'>
                            <p>1</p>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Counseling & University Selection</h2>
                            <p className='text-sm text-zinc-500'>Get Expert Guidance to choose the best university.</p>
                        </div>
                    </div>

                    {/* step 2 */}
                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <div className='min-h-8 min-w-8 text-white font-semibold bg-blue-600 rounded-full flex justify-center items-center'>
                            <p>2</p>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Documents Submission</h2>
                            <p className='text-sm text-zinc-500'>Submit academic and personal documents.</p>
                        </div>
                    </div>

                    {/* step 3 */}
                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <div className='min-h-8 min-w-8 text-white font-semibold bg-blue-600 rounded-full flex justify-center items-center'>
                            <p>3</p>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Admission Letter</h2>
                            <p className='text-sm text-zinc-500'>Receive admission letter from university.</p>
                        </div>
                    </div>

                    {/* step 4 */}
                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <div className='min-h-8 min-w-8 text-white font-semibold bg-blue-600 rounded-full flex justify-center items-center'>
                            <p>4</p>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Visa Application</h2>
                            <p className='text-sm text-zinc-500'>We assist in the complete visa application process.</p>
                        </div>
                    </div>

                    {/* step 5 */}
                    <div className='flex gap-2 items-center'>
                        {/* icon */}
                        <div className='min-h-8 min-w-8 text-white font-semibold bg-blue-600 rounded-full flex justify-center items-center'>
                            <p>5</p>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Travel & Arrival</h2>
                            <p className='text-sm text-zinc-500'>Fly to Russia and start your MBBS journey.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Admissioninfo