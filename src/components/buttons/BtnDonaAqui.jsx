import React, { useState } from 'react';
import Heart from '../svg/Heart';

export const BtnDonaAqui = () => {
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
            className='bg-yellowC border-[3px] border-yellowC 
         hover:bg-transparent transition-all ease-linear duration-300
         flex justify-center items-center gap-[10px] rounded-[32px] px-[22px] w-full h-[56px]'
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}>
            <p
               style={{ color: textColor }}
               className='font-[bariolBold] text-center 
            text-[20px] sm:text-[18px]'>
               ¡DONA AQUÍ!
            </p>
            <Heart color={svgColor} />
         </button>
      </a>
   );
};
