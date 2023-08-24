import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { CardCuentas } from "../cards/CardCuentas";
export default function CuentasSwiper() {
   return (
      <>
         <Swiper
            style={{
               "--swiper-pagination-color": "#F2C100",
               "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
               "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
            slidesPerView={3}
            spaceBetween={32}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               1016: {
                  slidesPerView: 2.6,
                  slidesPerGroup: 1,
                  spaceBetween: 24,
               },
               632: {
                  slidesPerView: 1.8,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
               },
               100: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
               },
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <CardCuentas img='home/auspiciadores/bcp.png'>
                  <p className='textCuenta'>
                     <span className='font-[bariolBold]'>Cuenta de AHORROS soles:</span> <br />
                     191-91840916-0-00
                  </p>
                  <p className='textCuenta'>
                     <span className='font-[bariolBold]'>Número de cuenta interbancaria(CCI):</span> <br />
                     002-19119184091600051
                  </p>
                  <p className='textCuenta'>
                     <span className='font-[bariolBold]'>Titular:</span> <br />
                     Asociación Comparte Perú
                  </p>
               </CardCuentas>
            </SwiperSlide>
            <SwiperSlide>
               <CardCuentas img='home/icons/yape.png'>
                  <p className='textCuenta'>
                     <span className='font-[bariolBold]'>YAPEA al número:</span> <br />
                     979 996 681
                  </p>
                  <div className='flex gap-[4px] items-center justify-center'>
                     <p className='textCuenta'> Ahora también desde </p>
                     <img alt='' src='home/icons/plin.png' />
                  </div>
                  <p className='textCuenta font-[bariolBold]'> O escanea este QR: </p>
                  <img alt='' src='home/icons/qr-yape.png' className='mx-auto' />
               </CardCuentas>
            </SwiperSlide>
            <SwiperSlide>
               <CardCuentas img='home/icons/tarjeta.png'>
                  <div className='textCuenta'>
                     <p className='font-[bariolBold]'>Visita el Link </p>
                     <a href='http://www.dona.comparteperu.com/' target='_blank' rel='noreferrer'
                        className='text-[#1400FF] hover:text-redC transition-all ease-in'>
                        www.dona.comparteperu.com
                     </a>
                  </div>
                  <p className='textCuenta'>
                     Y utiliza cualquier tarjeta de crédito o débito nacional o internacional
                     y divide tu donación en las cuotas que prefieras.
                  </p>
                  <img alt='' src='home/icons/tarjeta-agentes.png' className='mx-auto' />
               </CardCuentas>
            </SwiperSlide>
         </Swiper >
      </>
   );
}
