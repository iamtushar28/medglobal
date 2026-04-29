"use client";

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

const Cta = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null; // 👈 hides component completely

    return (
        <div className="h-14 w-full text-white bg-linear-to-r from-blue-500 to-indigo-500 flex gap-4 justify-center items-center relative">

            <p>
                👉 Register Now - Start Your MBBS Journey Today!
            </p>

            {/* divider */}
            <div className="h-6 w-px bg-white/50"></div>

            <button className="h-8 px-4 font-semibold text-blue-500 bg-white rounded flex gap-2 items-center">
                Register Now
                <FaArrowRightLong />
            </button>

            {/* close CTA */}
            <button
                onClick={() => setVisible(false)}
                className="h-8 w-8 text-xl text-white rounded absolute right-4 cursor-pointer"
            >
                <RiCloseLargeLine />
            </button>
        </div>
    );
};

export default Cta;