import React from 'react'
import { BiRupee } from 'react-icons/bi'
import { IoCalculatorOutline, IoWalletOutline } from 'react-icons/io5'
import { LiaHotelSolid } from 'react-icons/lia'
import { PiStudentFill } from 'react-icons/pi'

type Props = {}

const Studycost = (props: Props) => {
    return (
        <div className='flex flex-col gap-6 items-center'>

            {/* title */}
            <h2 className='text-2xl font-semibold'>Cost of Studying in Russia</h2>

            {/* cost cards */}
            <div className='h-auto w-full flex gap-5 md:gap-0 flex-wrap md:justify-around'>

                {/* tution fees */}
                <div className='h-42 w-full md:h-36 md:w-62 bg-white border border-zinc-200 rounded-lg flex flex-col gap-3 justify-center items-center'>

                    {/* title */}
                    <div className='text-blue-600 flex gap-1 items-center'>
                        {/* icon */}
                        <PiStudentFill className='text-3xl' />
                        <h4>Tution Fees</h4>
                    </div>

                    {/* ruppes */}
                    <div className='flex gap-1 items-center'>
                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>2.5L</h2>
                        </div>

                        <p>-</p>

                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>4.5L</h2>
                        </div>

                    </div>

                    <p className='text-sm textzinc-500'>Per Year</p>

                </div>

                {/* hostel fees */}
                <div className='h-42 w-full md:h-36 md:w-62 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2 justify-center items-center'>

                    {/* title */}
                    <div className='text-blue-600 flex gap-1 items-center'>
                        {/* icon */}
                        <LiaHotelSolid className='text-3xl' />
                        <h4>Hostel Fees</h4>
                    </div>

                    {/* ruppes */}
                    <div className='flex gap-1 items-center'>
                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>1L</h2>
                        </div>

                        <p>-</p>

                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>2.5L</h2>
                        </div>

                    </div>

                    <p className='text-sm textzinc-500'>Per Year</p>

                </div>

                {/* living fees */}
                <div className='h-42 w-full md:h-36 md:w-62 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2 justify-center items-center'>

                    {/* title */}
                    <div className='text-blue-600 flex gap-1 items-center'>
                        {/* icon */}
                        <IoWalletOutline className='text-3xl' />
                        <h4>Living Expense</h4>
                    </div>

                    {/* ruppes */}
                    <div className='flex gap-1 items-center'>
                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>10K</h2>
                        </div>

                        <p>-</p>

                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>50K</h2>
                        </div>

                    </div>

                    <p className='text-sm textzinc-500'>Per Month</p>

                </div>

                {/* total cost */}
                <div className='h-42 w-full md:h-36 md:w-62 bg-blue-50/60 border border-blue-200 rounded-lg flex flex-col gap-2 justify-center items-center'>

                    {/* title */}
                    <div className='text-blue-600 flex gap-1 items-center'>
                        {/* icon */}
                        <IoCalculatorOutline className='text-3xl' />
                        <h4>Total Cost</h4>
                    </div>

                    {/* ruppes */}
                    <div className='text-blue-600 flex gap-1 items-center'>
                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>25L</h2>
                        </div>

                        <p>-</p>

                        <div className='text-2xl font-semibold flex items-center'>
                            <BiRupee />
                            <h2>32L</h2>
                        </div>

                    </div>

                    <p className='text-sm textzinc-500'>Per Year</p>

                </div>

            </div>

            <p className='text-sm text-zinc-400 -mt-3'>* The fees may vary for some universities.</p>

        </div>
    )
}

export default Studycost