import React, { useState } from 'react';
import Heart from '../svg/Heart';

export const BtnSalvaVidas = () => {
   const [hovered, setHovered] = useState(false);
   const colorText = "#000";

   const handleHover = () => {
      setHovered(true);
   };

   const handleUnhover = () => {
      setHovered(false);
   };

   const textColor = hovered ? '#F2C200' : colorText;
   const svgColor = hovered ? '#F2C200' : colorText;

   return (
      <a href='http://www.dona.comparteperu.com/' target='_blank' rel='noreferrer'>
         <button
            className='bg-yellowC border-[3px] border-yellowC w-full
         hover:bg-transparent transition-all ease-linear duration-300 lg:rounded-full sm:w-[512px]
         flex justify-center items-center gap-[10px] rounded-[32px] px-[22px] py-[10px] sm:py-[18px]'
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}>
            <p
               style={{ color: textColor }}
               className='font-[bariolBold] text-center 
            text-[20px] leading-[20px] sm:text-[32px] sm:leading-[30px]'>
               <span className='font-[bariolRegular]'>SALVA VIDAS</span><br />
               ¡DONA AHORA!
            </p>
            <Heart color={svgColor} />
         </button>
      </a>
   );
};
