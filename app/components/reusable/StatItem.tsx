import React from "react";
import { IconType } from "react-icons";

type StatItemProps = {
    icon: IconType;
    value: string;
    label: string;
};

export function StatItem({ icon: Icon, value, label }: StatItemProps) {
    return (
        <div className="w-fit flex gap-2 items-center justify-center">

            {/* icon */}
            <div className="h-12 w-12 text-2xl text-white bg-white/20 rounded-xl flex justify-center items-center">
                <Icon />
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">{value}</h3>
                <p className="-mt-1 text-white">{label}</p>
            </div>
        </div>
    );
}