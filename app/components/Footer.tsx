import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='h-auto w-full py-8 text-white bg-blue-600 flex flex-col gap-6'>

            <div className='w-full flex justify-around'>
                {/* company info */}
                <div className='w-[25%] flex flex-col gap-2'>

                    {/* logo */}
                    <Image
                        src={'/images/logo/logowhite.png'}
                        alt='med global education logo'
                        width={220}
                        height={80}
                        priority
                        className='h-auto w-52 object-contain mix-blend-lighten'
                    />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea qui minus fugit! Dolores, maxime. Dolorem.</p>

                    {/* social links */}
                    <div className='flex gap-3'>

                        <div className='h-10 w-10 text-3xl rounded-full flex justify-center items-center'>
                            <IoLogoWhatsapp />
                        </div>
                        <div className='h-10 w-10 text-3xl rounded-full flex justify-center items-center'>
                            <FaFacebookSquare />
                        </div>
                        <div className='h-10 w-10 text-3xl rounded-full flex justify-center items-center'>
                            <FaLinkedin />
                        </div>

                    </div>

                </div>

                {/* quick links */}
                <div className='flex flex-col gap-4'>

                    {/* title */}
                    <h2 className='font-semibold'>QUick Links</h2>

                    <div className='flex flex-col gap-1'>
                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            About Us
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            Universities
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            Why Study Abroad
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            Admission Process
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            Contact Us
                        </Link>
                    </div>

                </div>

                {/* top destinations */}
                <div className='flex flex-col gap-4'>

                    {/* title */}
                    <h2 className='font-semibold'>Top Destinations</h2>

                    <div className='flex flex-col gap-1'>
                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            MBBS in Russia
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            MBBS in Kazakhstan
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            MBBS in Uzbekistan
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            MBBS in Georgia
                        </Link>

                        <Link href={'/'} className='text-white/80 hover:text-white cursor-pointer transition-all duration-300'>
                            Other Countries
                        </Link>
                    </div>

                </div>

                {/* subscribe */}
                <div className='w-[25%] flex flex-col gap-4'>

                    {/* title */}
                    <h4 className='font-semibold'>Stay in the Loop</h4>
                    <p className='text-sm'>Subscribe for the latest updates, expert tips, and more!</p>

                    {/* email input */}
                    <div className='flex gap-3'>


                        <input type="email" name="email" id="email" placeholder='Enter your email' className='h-11 w-52 px-3 text-black bg-white rounded-lg outline-none' />

                        <button className='h-11 px-4 text-black bg-white rounded-lg hover:bg-white/90 cursor-pointer transition-all duration-300'>
                            Join Us
                        </button>

                    </div>

                </div>
            </div>

            {/* copywrite scetion */}
            <div className='py-3 mx-8 text-sm text-white/90 border-t border-white/60 flex items-center justify-between'>
                <p>
                    2026 Med Global Education (A Unit of Mahajan Education LLP). All Rights Reserved.
                </p>

                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer