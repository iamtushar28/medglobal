import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosCall } from "react-icons/io";
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
            <div className='w-fit flex items-center gap-4 hidden'>

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

        </nav>
    )
}

export default Navbar