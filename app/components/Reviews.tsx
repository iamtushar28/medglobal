import React from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'
import ReviewCard from './reusable/ReviewCard'
import { reviews } from '../data/reviews'

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
                {reviews.map((item, index) => (
                    <ReviewCard key={index} {...item} />
                ))}

            </div>

            {/* indicator */}
            <div className='flex gap-3'>

                {reviews.map((_, index) => (
                    <div
                        key={index}
                        className={`h-4 w-4 rounded-full ${index === 0 ? "bg-blue-400" : "bg-zinc-200"
                            }`}
                    ></div>
                ))}

            </div>

        </div>
    )
}

export default Reviews