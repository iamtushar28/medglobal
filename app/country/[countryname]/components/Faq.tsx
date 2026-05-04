import React from 'react'
import { RiAddLargeFill } from 'react-icons/ri'

type Props = {}

const Faq = (props: Props) => {
    return (
        <div className='w-full h-auto flex flex-col gap-6 items-center'>

            {/* title */}
            <h2 className='text-2xl font-semibold'>
                Frequently Asked Questions
            </h2>

            {/* FAQ section */}
            <div className='w-full h-auto flex gap-4 flex-wrap justify-around'>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>Is MBBS in Russia valid in India?</p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>
                        Do I need NEET to MBBS in Russia?
                    </p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>Is MBBS in Russia valid in India?</p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>
                        Do I need NEET to MBBS in Russia?
                    </p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>Is MBBS in Russia valid in India?</p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

                <div className='h-12 w-full md:w-[48%] px-4 border border-zinc-200 rounded-lg flex justify-between items-center'>

                    <p className='font-semibold w-[90%] truncate'>
                        Do I need NEET to MBBS in Russia?
                    </p>

                    {/* open FAQ */}
                    <button className='text-xl text-blue-600'>
                        <RiAddLargeFill />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Faq