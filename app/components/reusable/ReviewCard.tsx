import React from "react";
import { BiMessageSquareDots } from "react-icons/bi";

type ReviewCardProps = {
    review: string;
    name: string;
    course: string;
    image?: string;
};

export default function ReviewCard({
    review,
    name,
    course,
    image,
}: ReviewCardProps) {
    return (
        <div className="h-56 w-80 p-4 border border-zinc-100 rounded-xl flex flex-col justify-between hover:shadow-md transition duration-300 cursor-pointer">

            {/* icon */}
            <div className="h-8 w-8 text-3xl text-blue-600 flex justify-center items-center">
                <BiMessageSquareDots />
            </div>

            {/* review */}
            <p className="text-sm text-zinc-700 line-clamp-3">{review}</p>

            {/* user */}
            <div className="flex gap-2 items-center">

                {/* profile */}
                <div className="h-10 w-10 bg-zinc-100 rounded-full overflow-hidden">
                    {image && (
                        <img src={image} alt={name} className="h-full w-full object-cover" />
                    )}
                </div>

                {/* info */}
                <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-zinc-500">{course}</p>
                </div>
            </div>
        </div>
    );
}