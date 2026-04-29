import FeatureCard from './reusable/FeatureCard'
import { features } from '../data/features'

type Props = {}

const Whychooseus = (props: Props) => {

    return (
        <div className='w-full flex flex-col gap-4 md:gap-5 items-center'>

            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                Why Choose Us
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold text-center'>Why Thousands of Students Choose Us?</h2>

            {/* features */}
            <div className='w-full flex flex-wrap gap-6 md:gap-10 justify-center'>

                {features.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                ))}

            </div>

        </div>
    )
}

export default Whychooseus