import React from 'react'

type Props = {}

const Mobilecta = (props: Props) => {
    return (
        <div className='md:hidden h-14 w-full shadow bg-linear-to-r from-blue-500 to-indigo-600 flex gap-1 justify-center items-center fixed bottom-0 z-40'>

            <button className='px-3 py-1 font-semibold text-blue-500 bg-white rounded'>
                Register Now
            </button>

            <p className='text-xs text-white text-wrap text-start'>
                - Start Your MBBS Journey Today!
            </p>

        </div>
    )
}

export default Mobilecta