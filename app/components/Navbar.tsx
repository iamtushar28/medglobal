import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMenu } from 'react-icons/io5';
type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='h-20 w-full px-4 bg-white shadow-xs flex justify-between items-center'>

            {/* medglobal logo */}
            <Image
                src={'/images/logo/logoblue.png'}
                alt='med global education logo'
                height={100}
                width={200}
                priority
                className='h-20 w-auto object-contain'
            />

            {/* navigation page links */}
            <div className='w-fit hidden md:flex items-center gap-4'>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>About Us</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>Universities</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>Contact Us</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='px-4 py-2 text-white bg-blue-600 rounded flex gap-1 items-center'>
                    <IoIosCall size={18} />
                    +91 726453522
                </Link>

            </div>

            {/* mobile open menu button */}
            <button className='md:hidden h-10 w-10 bg-zinc-50 rounded-lg text-2xl flex justify-center items-center'>
                <IoMenu />
            </button>

        </nav>
    )
}

export default Navbar