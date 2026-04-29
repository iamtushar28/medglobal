import React from 'react'

type Props = {}

const Contactus = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-5 items-center'>
            {/* title */}
            <div className='w-fit px-3 py-1 font-semibold text-blue-600 bg-blue-50 rounded-full'>
                Contact Us
            </div>

            {/* heading */}
            <h2 className='text-3xl font-semibold'>We're Here to Help You!</h2>

            <p className='-mt-3 text-zinc-600'>Have questions or need guidance? Reach out to us anytime.</p>

            {/* contact optins */}
            <div className='flex gap-6'>

                <div className='w-64 h-24 p-3 border border-zinc-200 rounded-xl flex gap-3 justify-start items-center'>

                    {/* icon */}
                    <div className='min-h-10 min-w-10 bg-zinc-100 rounded-full'></div>

                    {/* contact details */}
                    <div>

                        <h6 className='text-sm'>Phone/WhatsApp</h6>

                        <h4 className='font-semibold'>
                            +91 6352438465
                        </h4>

                        <p className='text-sm text-zinc-500'>24/7 Anytime</p>

                    </div>

                </div>

                <div className='w-80 h-24 p-3 border border-zinc-200 rounded-xl flex gap-3 justify-start items-center'>

                    {/* icon */}
                    <div className='min-h-10 min-w-10 bg-zinc-100 rounded-full'></div>

                    {/* contact details */}
                    <div>

                        <h6 className='text-sm'>Email Us</h6>

                        <h4 className='font-semibold'>
                            helpdesk@medglobal.com
                        </h4>

                        <p className='text-sm text-zinc-500'>We reply within 24 hours</p>

                    </div>

                </div>

                <div className='w-104 h-24 p-3 border border-zinc-200 rounded-xl flex gap-3 justify-start items-center'>

                    {/* icon */}
                    <div className='min-h-10 min-w-10 bg-zinc-100 rounded-full'></div>

                    {/* contact details */}
                    <div>

                        <h6 className='text-sm'>Office Address</h6>

                        <p className='text-sm text-zinc-500'>2nd Floor, Mahajan Education LLP, Above HDFC Bank, Laxmi Nagar, Nagpur, Maharashtra - 440022 </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contactus