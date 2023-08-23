import React from 'react'

export const CardDonar = ({text, icon}) => {
  return (
    <div
        className='bg-redC grid items-center
        rounded-[32px] py-[22px] px-[8px] gap-[18px]
        sm:rounded-[36px] sm:py-[36px] sm:px-[20px]'>
        <img alt="Icon" src={icon}
            className='w-auto mx-auto
            h-[72px] sm:h-[110px]'>
        </img>
        <p className='p1 text-center font-semibold'
            dangerouslySetInnerHTML={{ __html: text }}>
        </p>
    </div>
  )
}
