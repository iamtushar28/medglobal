import Image from 'next/image'
import React from 'react'
import CountryCard from './reusable/CountryCard'
import { countries } from '../data/countries'

type Props = {}

const Topdestination = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-4 md:gap-5 items-center'>
            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                Top Destinations
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold text-center'>Study MBBS in top countries</h2>

            {/* features */}
            <div className='w-full flex flex-wrap gap-10 justify-center'>

                {countries.map((country) => (
                    <CountryCard key={country.name} {...country} />
                ))}

            </div>

        </div>
    )
}

export default Topdestination