import React from 'react'

type Props = {}

const Topdestination = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-5 items-center'>
            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                Top Destinations
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold'>Study MBBS in top countries</h2>

            {/* features */}
            <div className='w-full flex gap-10 justify-center'>

                <div className='w-52 h-60 bg-white shadow-sm rounded-xl flex flex-col overflow-hidden'>

                    {/* country image */}
                    <div className='h-[45%] w-full bg-zinc-100'></div>

                    <div className='h-[58%] mt-[-3%] w-full p-2 rounded-t-lg bg-white'>

                        <div className='flex items-center gap-2'>
                            {/* country flag */}
                            <div className='h-10 w-10 -mt-7 bg-zinc-200 rounded-full'></div>

                            {/* country name */}
                            <h4 className='text-lg font-semibold'>Russia</h4>

                        </div>

                        {/* about country */}
                        <p className='px-3 text-sm text-zinc-600'>World class education with affordable fees and modern infrastructure.</p>

                        {/* explore country */}
                        <button className='px-3 py-2 text-sm text-blue-500'>Explore More</button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topdestination