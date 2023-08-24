import React from 'react'
import { BtnDonaAquiSmall } from '../components/buttons/BtnDonaAquiSmall'
import { useMediaQuery } from 'react-responsive'
import { CardCifras } from '../components/cards/CardCifras'
import { CardDonar } from '../components/cards/CardDonar'
import { CardOficinas } from '../components/cards/CardOficinas'
import { CardCuentas } from '../components/cards/CardCuentas'
import CuentasSwiper from '../components/swipers/CuentasSwiper'
import { BtnSalvaVidas } from '../components/buttons/BtnSalvaVidas'
import { BtnSuma } from '../components/buttons/BtnSuma'

export const Home = () => {
   const isDsk = useMediaQuery({ query: '(min-width: 650px)' })
   const isLg = useMediaQuery({ query: '(min-width: 1024px)' })
   return (
      <div className='bg-[url("/public/home/background.png")] bg-cover bg-no-repeat overflow-x-hidden'>
         <section id='Hero'
            className='container pySection'>
            <div className='bg-redC p-0 rounded-[32px] md:rounded-[56px]'>
               <img alt='Hero'
                  src={isDsk ? 'home/hero-dsk.jpg' : 'home/hero-mobile.jpg'}
                  className='w-full
                  rounded-t-[32px] md:rounded-t-[56px]'>
               </img>
               <p className='p1 mx-auto w-[94%] pb-[28px] pt-[16px]
                  lg:w-[840px] sm:pb-[40px] sm:pt-[32px]'>
                  En nuestro país, más de <span className='font-[bariolBold]'>{" "}7 millones{" "}</span> de personas
                  quedan expuestas a <span className='font-[bariolBold]'>{" "}temperaturas extremas{" "}</span> entre
                  abril y septiembre, todos los años y cientos de ellas fallecen a causa de problemas respiratorios.
               </p>
            </div>
            <div className='bg-cyanC grid items-center relative w-[86%]
               px-[20px] py-[30px] gap-[20px] max-w-[980px] mx-auto
               sm:px-[40px] sm:py-[56px] md:grid-cols-[392px_1fr]
               xl:px-[94px] xl:pb-[90px] xl:pt-[40px]'>
               <div>
                  <h2 className='text-redC sm:max-w-[392px] mx-auto'>
                     Y
                     <span className='sm:text-[36px] font-[bariolBold]'>
                        {" "}tú puedes ayudarnos{" "}
                     </span>
                     a enfrentar este fenómeno
                  </h2>
                  <p className='p2 pt-[20px]'>
                     Las heladas que son un fenómeno atmosférico recurrente en las zonas altoandinas sobre los 3,000 m.s.n.m.,
                     donde la temperatura ambiente desciende a niveles inferiores a los 0°C pudiendo llegar hasta -20°C.
                     <br /><br />
                     Suele presentarse entre abril y septiembre y afecta la calidad de vida de los personas y la agricultura.
                  </p>
               </div>
               <img alt='foto'
                  src='home/img-puedes-ayudarnos.png'
                  className='w-full mx-auto
                  max-w-[220px] sm:max-w-[380px] md:max-w-none'>
               </img>
               <img alt=''
                  src='svg/flower-yellow.svg'
                  className='absolute
                  w-[112px] right-[-42px] bottom-[-46px]
                  sm:w-[162px] sm:right-[-62px]'>
               </img>
            </div>
            <div className='grid relative items-center gap-[20px] max-w-[950px] mx-auto
               sm:gap-[40px]
               lgAux:grid-cols-[496px_1fr] lgAux:mt-[-66px]'>
               <img alt='mapa'
                  src='home/mapa.png'
                  className='w-[98%] mx-auto
                  max-w-[500px]'>
               </img>
               <div className='lgAux:mt-[80px]'>
                  <p className="p2">
                     A diferencia del friaje, que se presenta en la selva, donde el ingreso de una masa de aire frío
                     proveniente de la Antártida genera lluvias intensas y el descenso brusco de temperaturas,
                     <br /> <br />
                     Las <span className='font-[bariolBold] text-[16px] sm:text-[20px]'>{" "} heladas {" "}</span>
                     se presentan en la sierra y se caracterizan por la disminución prolongada de
                     la temperatura pudiendo  llegar hasta  -20°C con presencia de nieve y granizo afectando
                     gravemente al sur del  país y alcanzando su periodo más frío en los meses de junio y julio.
                  </p>
                  <div className='flex w-[280px] mx-auto mt-[20px]
                     lgAux:max-w-[200px] lgAux:mx-0'>
                     <BtnDonaAquiSmall />
                  </div>
               </div>
            </div>
         </section>

         <section id='Quienes-somos'
            className='container'>
            <div
               className='bg-cyanC mx-auto max-w-[246px] rounded-t-[24px] py-[10px]
               lgAux:bg-yellowC sm:max-w-[350px] sm:mx-0 sm:ml-[95px]'>
               <h2 className='font-[bariolBold] text-black lgAux:text-redC'>¿QUIÉNES SOMOS?</h2>
            </div>
            <div className='bg-redC grid items-center
               rounded-[32px] py-[30px] gap-[20px]
               sm:rounded-[56px] lgAux:grid-cols-[400px_1fr] lgAux:gap-[30px] lgAux:py-[48px]
               xl:grid-cols-[422px_1fr] xl:max-w-[1000px] mx-auto'>
               <img alt='Foto'
                  src='home/img-quienes-somos.png'
                  className=''>
               </img>
               <div className='text-white px-[20px] xl:w-[95%]'>
                  <h2 className='text-left font-[bariolBold]'>ONG Comparte Perú</h2>
                  <p className='p2 py-[18px]'>
                     Somos una asociación civil sin ﬁnes de lucro, enfocada en la promoción y articulación
                     del trabajo voluntario a través de actividades de refuerzo de la educación, salud mental,
                     convivencia familiar, atención de desastres y actividades que promuevan el bienestar de las personas.
                     <br /> <br />
                     En 8 años, hemos atendido a más de 40,000 beneﬁciarios gracias al apoyo de nuestros más de 2,300 voluntarios en todo el país.
                  </p>
                  <div className='font-[bariolBold]
                     grid grid-cols-2 gap-x-[16px] gap-y-[20px] text-[14px]
                     md:gap-x-[20px] md:gap-y-[18px] sm:text-[24px]'>
                     <p className='font-[BariolRegular] col-span-2'>¡Síguenos en redes!</p>
                     <a href='http://www.instagram.com/comparte.pe' target='_blank' rel='noreferrer'
                        className='flex gap-[8px] items-center 
                        justify-center cursor-pointer hover:underline transition-all ease-in'>
                        <img alt='' src='svg/instagram.svg'
                           className='w-[20px] sm:w-[40px]' />
                        <p>Comparte Perú</p>
                     </a>
                     <a href='http://www.facebook.com/compartepe' target='_blank' rel='noreferrer'
                        className='flex gap-[8px] items-center 
                        justify-center cursor-pointer hover:underline transition-all ease-in'>
                        <img alt='' src='svg/facebook.svg'
                           className='w-[20px] sm:w-[40px]' />
                        <p>Comparte Perú</p>
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <section id='Nuestra-historia'
            className='pySection'>
            <div className='bg-cyanC w-[78%] py-[8px] pr-[28px] rounded-r-[36px]
               sm:w-[80%] sm:py-[16px] sm:pr-[36px]
               md:w-[66%] lg:w-[50%] xl:w-[45%]'>
               <h2 className='text-black text-right font-[bariolBold]'>
                  NUESTRA HISTORIA EN CIFRAS:
               </h2>
            </div>
            <div className='container items-center relative
               grid grid-cols-2 gap-y-[24px] gap-x-[20px]
               lg:grid-cols-[1fr_1fr_398px] lg:gap-y-[36px] lg:gap-x-[40px]
               xl:gap-x-[96px]'>
               <CardCifras number="10" text="programas de voluntariado recurrente" />
               <CardCifras number="+2,564" text="voluntarios compartiendo su talento" />
               {isLg && <div></div>}
               <CardCifras number="+41,237" text="beneﬁciarios atendidos en todo el Perú" />
               <CardCifras number="+79,194" text="horas de trabajo voluntario compartidas" />
               <div className='mx-auto max-w-[250px] sm:max-w-[640px] lg:max-w-none
                  col-span-2 lg:col-span-1'>
                  <CardCifras number="+S/164,000" text="invertidos en nuestros programas y actividades de voluntariado y apoyo social " />
               </div>
               {isLg &&
                  <img alt='' src='/home/img-nuestra-historia.png'
                     className='absolute top-[-186px] right-[40px]'>
                  </img>
               }
            </div>
         </section>

         <section id='Conoce-que-donar' >
            <div className='container bg-redC p-0 rounded-[32px] md:rounded-[56px]'>
               <div className='relative'>
                  <img alt=''
                     src={isDsk ? 'home/como-dsk.jpg' : 'home/como-mobile.jpg'}
                     className='w-full
                     rounded-t-[32px] md:rounded-t-[56px]'>
                  </img>
                  <p className='absolute w-[242px] sm:w-[450px] md:w-[656px]
                     font-[bariolBold] text-white text-center
                     text-[20px] sm:text-[24px] md:text-[32px]
                     leading-[24px] sm:leading-[26px] md:leading-[34px]
                     translate-x-[50%] right-[50%] translate-y-[50%] bottom-[50%]'>
                     ¿Cómo podemos ayudar a mejorar la calidad de vida de las familias del sur del Perú?
                  </p>
                  <img alt=''
                     src='svg/flower-yellow.svg'
                     className='absolute
                  w-[112px] left-[-42px] bottom-[-8%]
                  lg:w-[180px] lg:left-[-8%] lg:bottom-[-22%]'>
                  </img>
               </div>
               <p className='p1 mx-auto w-[92%] pb-[28px] pt-[20px] text-left
                  xl:w-[980px] sm:pb-[40px] sm:pt-[32px] lg:py-[56px]'>
                  Colaborando con esta campaña solidaria, cuyo propósito es reducir la vulnerabilidad de la población
                  expuesta a las heladas en comunidades de Cusco y Puno, llevándoles
                  prendas abrigadoras, mantas, frazadas, calzado y alimentos no perecibles.
                  <br /> <br />
                  Pudes llevar tus donaciones a nuestro punto de acopio o realizar aportes económicos
                  en cualquiera de nuestros canales. Además, si eres una empresa, escríbenos a hola@comparteperu.com para conocer cómo ser parte.
               </p>
            </div>
            <div className='pySection'>
               <div className='bg-cyanC w-[94%] py-[8px] pl-[12px] pr-[28px] rounded-r-[212px]
                  sm:w-[80%] sm:py-[16px] sm:px-[36px]
                  md:w-[80%] lg:w-[60%]'>
                  <div className='flex items-center gap-[12px]  justify-end'>
                     <img alt='' src='home/icons/conoce.png'
                        className='w-[54px] sm:w-[77px]'>
                     </img>
                     <h2 className='text-black text-center font-[bariolBold] lg:leading-[]'>
                        <span className='text-[22px] md:text-[30px] lg:text-[32px]'> CONOCE QUÉ DONAR, </span>
                        <br />
                        <span className='text-[20px] md:text-[26px] lg:text-[32px]'>ABRIGUEMOS JUNTOS AL SUR PERUANO</span>
                     </h2>
                  </div>
               </div>
               <div className='container grid grid-cols-2 gap-[20px] pt-[30px]
                  sm:grid-cols-3 sm:gap-[28px]
                  lg:grid-cols-4 lg:pt-[48px]'>
                  <CardDonar text="Frazadas, mantas y colchas." icon="home/donar/frazadas.png" />
                  <CardDonar text={"Abrigos, <br/> casacas y chompas."} icon="home/donar/abrigos.png" />
                  <CardDonar text="Chalinas, <br/> chullos y guantes." icon="home/donar/chalinas.png" />
                  <CardDonar text="Zapatillas, zapatos <br/> y botas." icon="home/donar/zapatillas.png" />
                  <CardDonar text="Agua y alimentos no perecibles." icon="home/donar/agua.png" />
                  <CardDonar text="Pañales y artículos de higiene personal." icon="home/donar/panales.png" />
                  <CardDonar text="Medicinas no vencidas y bien conservadas." icon="home/donar/medicinas.png" />
                  <CardDonar text="Juguetes en buen estado, para niños." icon="home/donar/juguetes.png" />
               </div>
            </div>
            <div className='container'>
               <p className="p1 text-black max-w-[860px] mx-auto">
                  Asegúrate que todos los productos estén en limpios y en buen estado y
                  <span className='font-[bariolBold]'>{" "} llévalos, hasta el 30/08, {" "}</span>
                  a nuestros puntos de acopio en las oﬁcinas de:
               </p>
               <img src='home/icons/movilBus-big.png' alt='movil bus'
                  className='max-w-[288px] sm:max-w-[410px] mx-auto
                  py-[32px] md:py-[48px]'>
               </img>
               <div className='grid gap-[24px] sm:grid-cols-2 sm:gap-[40px]'>
                  <CardOficinas title={'TERMINAL ARRIOLA:'} adress={'Av. Nicolás Arriola 780, La Victoria'} link={'https://www.google.com/maps/place/Av+Nicol%C3%A1s+Arriola+780,+La+Victoria+15034/@-12.0661638,-77.0298409,12.21z/data=!4m6!3m5!1s0x9105c9d5e368492b:0xfbc2568df5ca09fd!8m2!3d-12.0821345!4d-77.0135127!16s%2Fg%2F11rv99msqz?entry=ttu'}>
                     <img src='svg/flower-yellow.svg' alt=''
                        className='absolute top-[-6px] left-[-6px]
                        w-[86px] md:w-[116px]'>
                     </img>
                  </CardOficinas>
                  <CardOficinas title={"TERRAPUERTO <br/> DEL NORTE:"} adress={'Av. Tomas Valle 651, San Martín de Porres '} link={'https://www.google.com/maps/place/Av.+Tom%C3%A1s+Valle+651,+San+Mart%C3%ADn+de+Porres+15103/@-12.010509,-77.068825,17z/data=!3m1!4b1!4m6!3m5!1s0x9105cee514255693:0x78678cb796f6a439!8m2!3d-12.010509!4d-77.0662501!16s%2Fg%2F11flkz_q0x?entry=ttu'}>
                     <img src='svg/flower-yellow.svg' alt=''
                        className='absolute bottom-[-6px] right-[-6px]
                        w-[86px] md:w-[116px]'>
                     </img>
                  </CardOficinas>
               </div>
               <p className="p1  text-redC pySection">
                  También puedes
                  <span className='font-[bariolBold] '>{" "} donar efectivo  {" "}</span>
                  a través de estos canales:
               </p>
               {
                  isLg ?
                     <div className='grid grid-cols-3 gap-[30px]'>
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
                     </div>
                     :
                     <CuentasSwiper />
               }
               <div className='flex justify-center pt-[20px] lg:pt-[48px] sm:w-[512px] mx-auto '>
                  <BtnSalvaVidas />
               </div>
            </div>
         </section>

         <section id='Aliados'
            className='pySection'>
            <div className='bg-[url("/public/home/auspiciadores/bg.png")] bg-cover bg-no-repeat bg-center'>
               <p className='p1 w-[78%] mx-auto py-[32px] sm:py-[60px] lg:py-[84px]'>
                  El trabajo en equipo siempre da mejores resultados
                  <br />
                  <span className='font-[bariolBold]'>¡Conoce a nuestros aliados!</span>
               </p>
            </div>
            <div className='container pySection'>
               {isDsk ?
                  <img className='w-full max-w-[1068px] mx-auto'
                     src='home/auspiciadores/logos-big.png' alt=''>
                  </img>
                  :
                  <img className='w-full max-w-[330px] mx-auto'
                     src='home/auspiciadores/logos-small.png' alt=''>
                  </img>
               }
               <div className='flex justify-center pySection'>
                  <BtnSuma />
               </div>
               <p className='font-[bariolRegular] text-center text-[14px] lg:text-[18px]'>
                  Campaña respaldada nominalmente por el Proyecto Especial Bicentenario 
                  de la Independencia del Perú, adscrito al Ministerio de Cultura.
               </p>
            </div>
         </section>
      </div>
   )
}
