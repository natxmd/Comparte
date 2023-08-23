import React from 'react'

export const CardCuentas = ({ children, img }) => {
  return (
    <div
      className='bg-[#EBEBEB] grid justify-center items-center justify-items-center
        rounded-[40px] px-[11px] py-[20px] min-h-[445px] !h-full min-w-[312px] mb-[50px]
        md:rounded-[56px] md:py-[26px] sm:min-h-[498px] lg:mb-0'>
      <div className='grid gap-[20px] sm:gap-[24px]'>
        <img alt='' src={img}
          className='mx-auto'>
        </img>
        {children}
      </div>
    </div>
  )
}
