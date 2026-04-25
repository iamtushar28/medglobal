import React from 'react'

type Props = {}

const Whychooseus = (props: Props) => {
    return (
        <div className='w-full py-10 flex flex-col gap-6 items-center'>
            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                Why Choose Us
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold'>Why Thousands of Students Choose Us?</h2>

            {/* features */}
            <div className='w-full flex gap-10 justify-center'>

                <div className='w-48 h-52 p-4 bg-white shadow-sm rounded-xl flex flex-col gap-2 justify-center items-center'>

                    {/* icon */}
                    <div className='h-14 w-14 bg-blue-100 rounded-full'></div>

                    {/* title */}
                    <h4 className='font-semibold'>Trusted Consultancy</h4>

                    {/* sub title */}
                    <p className='text-sm text-center text-zinc-600'>We are a trusted name in abroad education with proven results.</p>

                    {/* visual */}
                    <div className='w-12 h-1 bg-blue-500 rounded-full'></div>

                </div>

                <div className='w-48 h-52 p-4 bg-white shadow-sm rounded-xl flex flex-col gap-2 justify-center items-center'>

                    {/* icon */}
                    <div className='h-14 w-14 bg-green-100 rounded-full'></div>

                    {/* title */}
                    <h4 className='font-semibold'>4+ Years Experience</h4>

                    {/* sub title */}
                    <p className='text-sm text-center text-zinc-600'>Years of expertise in MBBS admission and student support.</p>

                    {/* visual */}
                    <div className='w-12 h-1 bg-green-500 rounded-full'></div>

                </div>

                <div className='w-48 h-52 p-4 bg-white shadow-sm rounded-xl flex flex-col gap-2 justify-center items-center'>

                    {/* icon */}
                    <div className='h-14 w-14 bg-orange-100 rounded-full'></div>

                    {/* title */}
                    <h4 className='font-semibold'>No Hidden Charges</h4>

                    {/* sub title */}
                    <p className='text-sm text-center text-zinc-600'>We believe in 100% transparancy. No hidden costs at any stage.</p>

                    {/* visual */}
                    <div className='w-12 h-1 bg-orange-500 rounded-full'></div>

                </div>

                <div className='w-48 h-52 p-4 bg-white shadow-sm rounded-xl flex flex-col gap-2 justify-center items-center'>

                    {/* icon */}
                    <div className='h-14 w-14 bg-violet-100 rounded-full'></div>

                    {/* title */}
                    <h4 className='font-semibold'>End-to-End Support</h4>

                    {/* sub title */}
                    <p className='text-sm text-center text-zinc-600'>From counseling to arrival abroad - we are with you, always.</p>

                    {/* visual */}
                    <div className='w-12 h-1 bg-violet-500 rounded-full'></div>

                </div>

            </div>

        </div>
    )
}

export default Whychooseus