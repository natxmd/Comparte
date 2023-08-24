import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const BtnSuma = () => {
   const isDsk = useMediaQuery({ query: '(min-width: 650px)' });

   const handleButtonClick = () => {
      const mailtoLink = "mailto:hola@comparteperu.com";
      window.open(mailtoLink, '_blank');
   };

   return (
      <button
         className='bg-yellowC border-[4px] border-yellowC 
         hover:bg-transparent hover:border-black transition-all ease-linear duration-300
         flex justify-center items-center gap-[10px] rounded-[32px] px-[18px] py-[8px] 
         sm:rounded-[210px] sm:px-[32px] sm:py-[12px] w-auto'
         onClick={handleButtonClick} >
         <img alt="" src="home/icons/suma.png" className='w-[52px] md:w-[88px]' />
         <p className='font-[bariolBold] text-center 
            text-[20px] leading-[20px] sm:text-[32px] sm:leading-[30px]'>
            SUMA A TU EMPRESA COMO ALIADA<br />
            {isDsk && <span className='font-[bariolRegular]'>y logremos cosas increíbles, ¡juntos!</span>}
         </p>
      </button>
   );
};
