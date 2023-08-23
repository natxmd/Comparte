import React from 'react'

export const CardCifras = ({number, text}) => {
  return (
    <div className='text-center font-[Fredoka] font-medium'>
        <p className='text-redC
            text-[44px] sm:text-[64px]'>
            {number}
        </p>
        <p className='text-[20px] sm:text-[32px]'>
            {text}
        </p>
    </div>
  )
}
