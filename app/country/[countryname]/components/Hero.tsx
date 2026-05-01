import Image from 'next/image'
import { BsGraphUp } from 'react-icons/bs'
import { FaUniversity } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiCheckBadge } from 'react-icons/hi2'
import { IoLanguage } from 'react-icons/io5'
import { MdDoNotDisturbAlt, MdOutlineWatchLater } from 'react-icons/md'
import { PiStudentFill } from 'react-icons/pi'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="relative h-screen w-full pt-12 overflow-hidden rounded-b-">

            {/* Background Image */}
            <Image
                src="/images/country/russia.jpg"
                alt="mbbs college in russia"
                fill
                className="object-cover object-bottom-left md:object-top-right pt-12"
                priority
            />

            {/* LEFT WHITE GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/90 to-transparent" />

            {/* Optional: Content area */}
            <div className="relative z-20 h-full w-full pt-12 md:pt-20 flex flex-col justify-center md:justify-start px-4 md:px-12">

                {/* heading */}
                <div className="w-full lg:max-w-[50%] md:py-10 flex flex-col gap-5">

                    {/* page accordian */}
                    <div className='text-sm text-black/40 flex gap-1 items-center'>

                        <p>Home</p>
                        <p>{">"}</p>
                        <p>Countries</p>
                        <p>{">"}</p>
                        <p className='text-black font-semibold'>MBBS in Russia</p>

                    </div>

                    {/* sub heading */}
                    <div className='flex gap-2 items-center'>

                        {/* country flag */}
                        <div className='h-12 w-12 border border-zinc-200 rounded-full overflow-hidden'>
                            <Image
                                src={'/images/flags/ru-flag.jpg'}
                                alt={'russia'}
                                height={100}
                                width={200}
                                className="h-full w-full object-cover object-center"
                                priority
                            />
                        </div>

                        <div className='px-2 py-1 capitalize w-fit text-sm font-semibold text-blue-600 bg-blue-50 rounded'>
                            <p>MBBS Destination</p>
                        </div>

                    </div>


                    {/* heading */}
                    <div>
                        <h1 className="text-6xl font-bold">
                            MBBS In{" "}
                            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                Russia
                            </span>
                        </h1>
                    </div>

                    {/* about */}
                    <p className='text-zinc-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis deserunt saepe odit voluptatibus repellendus unde provident sapiente illo officiis est natus, numquam maxime culpa in, tempore inventore.
                    </p>

                    {/* features */}
                    <div className='flex flex-wrap gap-2 md:gap-4'>

                        <div className='flex gap-2 items-center'>

                            <div className='h-10 w-10 text-2xl text-blue-600 border border-zinc-200 bg-white rounded-full flex justify-center items-center'>
                                <HiCheckBadge />
                            </div>

                            <p>NMC Approved</p>

                        </div>

                        <div className='flex gap-2 items-center'>

                            <div className='h-10 w-10 text-xl text-blue-600 border border-zinc-200 bg-white rounded-full flex justify-center items-center'>
                                <IoLanguage />
                            </div>

                            <p>English Medium</p>

                        </div>

                        <div className='flex gap-2 items-center'>

                            <div className='h-10 w-10 text-2xl text-blue-600 border border-zinc-200 bg-white rounded-full flex justify-center items-center'>
                                <MdDoNotDisturbAlt />
                            </div>

                            <p>Zero Donation</p>

                        </div>

                    </div>

                    {/* CTA */}
                    <button className='w-fit px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg flex gap-3 items-center'>
                        Apply Now
                        <FaArrowRightLong size={18} color='#ffffff' />
                    </button>

                </div>

                {/* county stats */}
                <div className='hidden h-24 w-[45%] p-4 bg-white border border-zinc-200 rounded-xl absolute bottom-4 right-12 md:flex justify-around items-center'>

                    {/* stats card */}
                    <div className='flex flex-col items-center'>

                        {/* icon */}
                        <div className='text-xl text-blue-600'>
                            <FaUniversity />
                        </div>

                        {/* title */}
                        <div className='text-center'>
                            <h3 className='font-semibold text-blue-600'>350+</h3>
                            <p className='text-sm'>Universities</p>
                        </div>

                    </div>

                    <div className='flex flex-col items-center'>

                        {/* icon */}
                        <div className='text-xl text-blue-600'>
                            <PiStudentFill />
                        </div>

                        {/* title */}
                        <div className='text-center'>
                            <h3 className='font-semibold text-blue-600'>15,000+</h3>
                            <p className='text-sm'>Indian Studens</p>
                        </div>

                    </div>

                    <div className='flex flex-col items-center'>

                        {/* icon */}
                        <div className='text-xl text-blue-600'>
                            <BsGraphUp />
                        </div>

                        {/* title */}
                        <div className='text-center'>
                            <h3 className='font-semibold text-blue-600'>95%</h3>
                            <p className='text-sm'>Success Rate</p>
                        </div>

                    </div>

                    <div className='flex flex-col items-center'>

                        {/* icon */}
                        <div className='text-xl text-blue-600'>
                            <MdOutlineWatchLater />
                        </div>

                        {/* title */}
                        <div className='text-center'>
                            <h3 className='font-semibold text-blue-600'>24/7</h3>
                            <p className='text-sm'>Support</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero