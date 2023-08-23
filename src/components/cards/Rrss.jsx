import React from 'react'

export const Rrss = ({rs, icon}) => {
  return (
    <div className='flex gap-[4px] items-center cursor-pointer'>
        <img alt={rs} src={icon}
            className='w-[24px]'>
        </img>
        <p className='font-[Fredoka] font-light text-[18px] text-white'>
            {rs}
        </p>
    </div>
  )
}
