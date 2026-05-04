import Image from 'next/image'
import React from 'react'
import { GrLinkNext } from 'react-icons/gr'

type Props = {}

const Visualcta = (props: Props) => {
    return (
        <div className='h-auto w-full p-4 md:p-6 md:mt-28 text-white bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex flex-col md:flex-row gap-3 md:gap-10 justify-center items-start md:items-center'>

            {/* visual image */}
            <Image
                src={'/images/girlstudent.png'}
                alt='student girl'
                height={100}
                width={200}
                className='h-72 w-auto hidden md:block -mt-40 -ml-18'
            />

            {/* title */}
            <div>
                <h2 className='text-2xl font-semibold'>Ready to Start Your</h2>
                <h2 className='text-2xl font-semibold'>MBBS Journey in Russia?</h2>
                <p>Our experts are here to guide you at every step.</p>
            </div>

            {/* CTA */}
            <button className='px-6 py-2 font-semibold text-blue-600 bg-white rounded-lg flex gap-2 items-center'>
                Talk to Our Expert
                <GrLinkNext />
            </button>

        </div>
    )
}

export default Visualcta