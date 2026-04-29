import React from 'react'

type Props = {}

const Reviews = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-5 items-center'>
            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                What Our Learners Says
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold'>Success Stories from Our Students</h2>

            {/* Reviews */}
            <div className='flex gap-6'>

                {/* review card */}
                <div className='h-56 w-80 p-4 border border-zinc-200 rounded-xl flex flex-col justify-between'>

                    {/* icon */}
                    <div className='h-8 w-8 bg-blue-100 rounded-lg'></div>

                    {/* review */}
                    <p>From counselling to visa, everything was so smooth. Highly professional and transparent services.</p>

                    {/* reviewer student info */}
                    <div className='flex gap-2 items-center'>

                        {/* profile image */}
                        <div className='h-10 w-10 bg-zinc-100 rounded-full'></div>

                        {/* name */}
                        <div>
                            <h4 className='font-semibold'>Mohan Verma</h4>
                            <p className='text-sm text-zinc-500'>MBBS Student, Russia</p>
                        </div>

                    </div>

                </div>

                <div className='h-56 w-80 p-4 border border-zinc-200 rounded-xl flex flex-col justify-between'>

                    {/* icon */}
                    <div className='h-8 w-8 bg-blue-100 rounded-lg'></div>

                    {/* review */}
                    <p>From counselling to visa, everything was so smooth. Highly professional and transparent services.</p>

                    {/* reviewer student info */}
                    <div className='flex gap-2 items-center'>

                        {/* profile image */}
                        <div className='h-10 w-10 bg-zinc-100 rounded-full'></div>

                        {/* name */}
                        <div>
                            <h4 className='font-semibold'>Mohan Verma</h4>
                            <p className='text-sm text-zinc-500'>MBBS Student, Russia</p>
                        </div>

                    </div>

                </div>

                <div className='h-56 w-80 p-4 border border-zinc-200 rounded-xl flex flex-col justify-between'>

                    {/* icon */}
                    <div className='h-8 w-8 bg-blue-100 rounded-lg'></div>

                    {/* review */}
                    <p>From counselling to visa, everything was so smooth. Highly professional and transparent services.</p>

                    {/* reviewer student info */}
                    <div className='flex gap-2 items-center'>

                        {/* profile image */}
                        <div className='h-10 w-10 bg-zinc-100 rounded-full'></div>

                        {/* name */}
                        <div>
                            <h4 className='font-semibold'>Mohan Verma</h4>
                            <p className='text-sm text-zinc-500'>MBBS Student, Russia</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* indicator */}
            <div className='flex gap-3'>

                <div className='h-4 w-4 bg-blue-400 rounded-full'></div>
                <div className='h-4 w-4 bg-zinc-200 rounded-full'></div>
                <div className='h-4 w-4 bg-zinc-200 rounded-full'></div>
                <div className='h-4 w-4 bg-zinc-200 rounded-full'></div>

            </div>

        </div>
    )
}

export default Reviews