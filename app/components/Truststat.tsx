import React from 'react'

type Props = {}

const Truststat = (props: Props) => {
    return (
        <div className='h-auto w-full p-6 bg-linear-to-r from-blue-700 to-blue-500 rounded-xl flex flex-col gap-3'>

            <p className='px-3 py-1 w-fit text-white bg-white/20 rounded-full'>Trusted by Thousands</p>

            {/* title */}
            <h2 className='text-2xl font-semibold text-white'>Numbers that Build Trust</h2>

            {/* stats */}
            <div className='flex justify-between'>

                {/* card */}
                <div className='w-fit flex gap-2 items-center justify-center'>

                    {/* icon */}
                    <div className='h-12 w-12 bg-white/20 rounded-xl'></div>

                    <div>
                        <h3 className='text-xl font-semibold text-white'>350+</h3>
                        <p className='-mt-1 text-white'>Partner Universities</p>
                    </div>

                </div>

                {/* card */}
                <div className='w-fit flex gap-2 items-center justify-center'>

                    {/* icon */}
                    <div className='h-12 w-12 bg-white/20 rounded-xl'></div>

                    <div>
                        <h3 className='text-xl font-semibold text-white'>15,000+</h3>
                        <p className='-mt-1 text-white'>Students Enrolled</p>
                    </div>

                </div>

                {/* card */}
                <div className='w-fit flex gap-2 items-center justify-center'>

                    {/* icon */}
                    <div className='h-12 w-12 bg-white/20 rounded-xl'></div>

                    <div>
                        <h3 className='text-xl font-semibold text-white'>4+</h3>
                        <p className='-mt-1 text-white'>Years Experience</p>
                    </div>

                </div>

                {/* card */}
                <div className='w-fit flex gap-2 items-center justify-center'>

                    {/* icon */}
                    <div className='h-12 w-12 bg-white/20 rounded-xl'></div>

                    <div>
                        <h3 className='text-xl font-semibold text-white'>95%</h3>
                        <p className='-mt-1 text-white'>Success Rate</p>
                    </div>

                </div>

                {/* card */}
                <div className='w-fit flex gap-2 items-center justify-center'>

                    {/* icon */}
                    <div className='h-12 w-12 bg-white/20 rounded-xl'></div>

                    <div>
                        <h3 className='text-xl font-semibold text-white'>24/7</h3>
                        <p className='-mt-1 text-white'>Expert Support</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Truststat