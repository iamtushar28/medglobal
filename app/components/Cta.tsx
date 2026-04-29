import React from 'react'

type Props = {}

const Cta = (props: Props) => {
    return (
        <div className='hidden h-14 w-full text-white bg-blue-500 flex gap-4 justify-center items-center relative'>
            <p>
                👉 Register Now - Start Your MBBS Journey Today!
            </p>

            {/* devider */}
            <div className='h-6 w-px bg-white/50'></div>

            <button className='h-8 w-fit px-4 font-semibold text-blue-500 bg-white rounded'>
                Register Now
            </button>

            {/* close CTA */}
            <button className='h-8 w-8 bg-white/30 rounded absolute right-4'>

            </button>

        </div>
    )
}

export default Cta