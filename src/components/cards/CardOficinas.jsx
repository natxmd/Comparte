import React from 'react'

export const CardOficinas = ({ title, link, adress, children }) => {
    return (
        <div className='rounded-full mx-auto bg-[#D9D9D9] text-center grid items-center
            w-[280px] h-[280px] p-[40px] relative
            sm:w-[300px] sm:h-[300px] sm:p-[60px]
            md:w-[332px] md:h-[332px] md:p-[40px]
            lg:h-[380px] lg:w-[380px] lg:p-[80px]'>
            <h2 className='font-[bariolBold]' 
                dangerouslySetInnerHTML={{ __html: title }}>
            </h2>
            <p className='font-[bariolRegular] text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>{adress}</p>
            <a className='font-[bariolBold] uppercase underline
                text-[#1400FF] hover:text-redC transition-all ease-in
                text-[20px] md:text-[24px]'
                target='_blank' rel="noreferrer"
                href={link}>
                Ver mapa
            </a>
            {children}
        </div>
    )
}
