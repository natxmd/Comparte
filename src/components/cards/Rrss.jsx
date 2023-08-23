import React from 'react'

export const Rrss = ({rs, icon, link}) => {
  return (
    <a className='flex gap-[4px] items-center cursor-pointer
        hover:underline'
        href={link} target='_blank' rel='noreferrer'>
        <img alt={rs} src={icon}
            className='w-[32px]'>
        </img>
        <p className='font-[Fredoka] font-light text-[18px] text-white'>
            {rs}
        </p>
    </a>
  )
}
