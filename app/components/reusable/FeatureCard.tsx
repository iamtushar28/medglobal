import React from "react";
import { IconType } from "react-icons";

type FeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
    iconColor: string;
    bgColor: string;
    lineColor: string;
};

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    iconColor,
    bgColor,
    lineColor,
}: FeatureCardProps) {
    return (
        <div className="w-full h-60 md:w-52 p-4 bg-white border border-zinc-100 shadow-sm rounded-xl flex flex-col gap-2 justify-center items-center transition relative">

            {/* icon */}
            <div
                className={`h-14 w-14 text-3xl ${iconColor} ${bgColor} rounded-full flex justify-center items-center`}
            >
                <Icon />
            </div>

            {/* title */}
            <h4 className="font-semibold text-center">{title}</h4>

            {/* description */}
            <p className="text-sm text-center text-zinc-600">
                {description}
            </p>

            {/* line */}
            <div className={`w-12 h-1 ${lineColor} rounded-full absolute bottom-6 md:bottom-3`}></div>
        </div>
    );
}