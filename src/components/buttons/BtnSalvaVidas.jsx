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
      <button
         className='bg-yellowC border-[3px] border-yellowC 
         hover:bg-transparent transition-all ease-linear duration-300
         flex justify-center items-center gap-[10px] rounded-[32px] px-[22px] py-[10px] sm:py-[18px] w-auto'
         onMouseEnter={handleHover}
         onMouseLeave={handleUnhover}>
         <p
            style={{ color: textColor }}
            className='font-[Fredoka] font-semibold text-center 
            text-[20px] leading-[20px] sm:text-[32px] sm:leading-[30px]'>
            <span className='font-normal'>SALVA VIDAS</span><br/>
            ¡DONA AHORA!
         </p>
         <Heart color={svgColor} />
      </button>
   );
};
