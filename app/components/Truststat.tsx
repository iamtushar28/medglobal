import { StatItem } from './reusable/StatItem'
import { stats } from '../data/stats'

type Props = {}

const Truststat = (props: Props) => {
    return (
        <div className='h-auto w-full p-6 bg-linear-to-r from-blue-700 to-blue-500 rounded-xl flex flex-col gap-3'>

            <p className='px-3 py-1 w-fit text-white bg-white/20 rounded-full'>Trusted by Thousands</p>

            {/* title */}
            <h2 className='text-2xl font-semibold text-white'>Numbers that Build Trust</h2>

            {/* stats */}
            <div className='flex justify-between'>

                {stats.map((item, index) => (
                    <StatItem key={index} {...item} />
                ))}

            </div>

        </div>
    )
}

export default Truststat