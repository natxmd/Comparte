import React from 'react'
import Fb from '../components/svg/Fb'
import Ig from '../components/svg/Ig'
import In from '../components/svg/In'
import { BtnDonaAqui } from '../components/buttons/BtnDonaAqui'
import { useMediaQuery } from 'react-responsive'
import { Rrss } from '../components/cards/Rrss'

export const Footer = () => {
  const isLg = useMediaQuery({ query: '(min-width: 1000px)' })
  return (
    <footer>
      {!isLg ?
        <div className='bg-black py-[32px] grid gap-[20px]
      font-[Fredoka] font-light text-[18px] text-center text-white'>
          <img alt='' src='svg/logo.svg'
            className='mx-auto w-[222px]'>
          </img>
          <p>¡Síguenos!</p>
          <div className='flex items-center justify-center gap-[16px]'>
            <a href='http://www.facebook.com/compartepe' target='_blank' rel='noreferrer'><Fb /></a>
            <a href='http://www.instagram.com/comparte.pe' target='_blank' rel='noreferrer'><Ig /></a>
            <a href='https://www.linkedin.com/company/comparteperu/' target='_blank' rel='noreferrer'><In /></a>
          </div>
          <p>hola@comparteperu.com</p>
          <p>
            <span className='font-medium'>WhatsApp:</span> <br />
            979 996 681
          </p>
          <div className='max-w-[212px] mx-auto'>
            <BtnDonaAqui />
          </div>
          <img alt='' src='home/icons/grupoComparte.png'
            className='mx-auto'>
          </img>
        </div>
        :
        <div className='bg-black py-[32px] grid 
          font-[Fredoka] font-light text-[18px] text-white'>
          <div className='container grid grid-cols-[1fr_242px_203px_1fr] gap-[24px] xl:gap-[80px]'>
            <img alt='' src='svg/logo.svg'
              className='mx-auto w-[224px]'>
            </img>
            <div className='grid gap-[12px]'>
              <p>¡Síguenos!</p>
              <Rrss icon={'svg/fb.svg'} rs="/compartepe" link={'http://www.facebook.com/compartepe'}/>
              <Rrss icon={'svg/ig.svg'} rs="/compartepe" link={'http://www.instagram.com/comparte.pe'}/>
              <Rrss icon={'svg/in.svg'} rs="/company/comparteperu" link={'https://www.linkedin.com/company/comparteperu/'}/>
            </div>
            <div className='grid gap-[12px]'>
              <p>
                <span className='font-medium'>Contáctanos:</span> <br />
                hola@comparteperu.com
              </p>
              <p>
                <span className='font-medium'>WhatsApp:</span> <br />
                979 996 681
              </p>
              <div className='max-w-[212px]'>
                <BtnDonaAqui />
              </div>
            </div>
            <img alt='' src='home/icons/grupoComparte.png'
              className='mx-auto'>
            </img>
          </div>
        </div>
      }

      <div className='bg-[#575756]'>
        <p className='font-[Fredoka] text-center text-white font-light
          text-[14px] sm:text-[18px] w-[94%] mx-auto'>
          © 2023 Asociación Comparte Perú   |   RUC: 20603575386   |   hola@comparteperu.com
        </p>
      </div>
    </footer>
  )
}
