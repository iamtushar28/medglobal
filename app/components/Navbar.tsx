import Link from 'next/link'
import React from 'react'
import { IoIosCall } from "react-icons/io";
type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='h-20 w-full px-4 bg-white shadow-xs flex justify-between items-center fixed top-0 left-0 right-0 z-50'>

            {/* medglobal logo */}
            <h2>Med Global</h2>

            {/* navigation page links */}
            <div className='w-fit flex items-center gap-4'>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>About Us</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>Universities</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='hover:text-blue-600 cursor-pointer transition-all duration-300'>Contact Us</Link>

                {/* devider */}
                <div className='h-6 w-px bg-zinc-400'></div>

                <Link href={'/'} className='px-4 py-1 text-white bg-blue-600 rounded-full flex gap-1 items-center'>
                    <IoIosCall size={18} />
                    +91 726453522
                </Link>

            </div>

        </nav>
    )
}

export default Navbar