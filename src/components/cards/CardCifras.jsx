import React from 'react'

export const CardCifras = ({number, text}) => {
  return (
    <div className='text-center font-[bariolBold]'>
        <p className='text-redC
            text-[44px] sm:text-[64px]'>
            {number}
        </p>
        <p className='font-[bariolRegular] text-[20px] sm:text-[32px] sm:leading-[30px]'>
            {text}
        </p>
    </div>
  )
}
