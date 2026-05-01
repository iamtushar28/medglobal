import Image from "next/image";

// CountryCard.tsx

export type Country = {
    countryImage: string;
    flagImage: string;
    name: string;
    description: string;
};

export default function CountryCard({
    countryImage,
    flagImage,
    name,
    description,
}: Country) {
    return (
        <div className="w-full h-96 md:w-56 md:h-64 bg-white shadow-sm rounded-xl flex flex-col overflow-hidden hover:shadow-md transition">

            {/* country image */}
            <div className="h-[45%] w-full bg-zinc-100">
                <Image
                    src={countryImage}
                    alt={name}
                    height={100}
                    width={200}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="h-[58%] mt-[-3%] w-full p-4 md:p-2 rounded-t-lg bg-white">

                <div className="flex items-center gap-2">

                    {/* flag */}
                    <div className="h-12 w-12 md:h-10 md:w-10 -mt-12 bg-zinc-200 rounded-full overflow-hidden">
                        <Image
                            src={flagImage}
                            alt={name}
                            height={100}
                            width={100}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* name */}
                    <h4 className="text-lg font-semibold">{name}</h4>
                </div>

                {/* description */}
                <p className="px-3 text-sm text-zinc-600 line-clamp-6 md:line-clamp-3">
                    {description}
                </p>

                {/* button */}
                <button className="px-3 py-2 mt-1 text-sm text-blue-500">
                    Explore More
                </button>
            </div>
        </div>
    );
}