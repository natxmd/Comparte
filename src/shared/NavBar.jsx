import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { BtnDonaAqui } from '../components/buttons/BtnDonaAqui'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'

export const NavBar = () => {

    const [isOpen, setOpen] = useState(false)
    const isXl = useMediaQuery({ query: '(min-width: 1000px)' })

    return (
        <header
            className='bg-black flex items-center justify-center relative
        h-[72px] sm:h-[100px]'>
            <nav
                className='flex items-center justify-between mx-auto
                w-[96%] 2xl:max-w-[1142px]'>
                <img
                    src='svg/logo.svg' alt='Comparte'
                    className='w-[120px] sm:w-[150px]'>
                </img>
                {isXl ?
                    <div className='flex items-center gap-[32px]'>
                        <Link to="Hero"
                            spy={true}
                            offset={0}
                            smooth={true}
                            duration={500}>
                            <p className='textNav'>HELADAS EN PERÚ</p>
                        </Link>
                        <Link to="Quienes-somos"
                            spy={true}
                            offset={0}
                            smooth={true}
                            duration={500}>
                            <p className='textNav'>¿QUIÉNES SOMOS?</p>
                        </Link>
                        <Link to="Conoce-que-donar"
                            spy={true}
                            offset={790}
                            smooth={true}
                            duration={500}>
                            <p className='textNav'>¿CÓMO COLABORAR?</p>
                        </Link>
                        <div>
                            <BtnDonaAqui />
                        </div>
                    </div>
                    :
                    <Hamburger toggled={isOpen} toggle={setOpen}
                        size={32} color="#FFF" />
                }
            </nav>
            {
                isOpen &&
                <div className='bg-black absolute z-20
                top-[72px] sm:top-[100px] p-[30px]
                w-full h-[100vh]'>
                    <Link to="Hero"
                        spy={true}
                        offset={0}
                        smooth={true}
                        duration={500}
                        onClick={()=> setOpen(false)}>
                        <p className='textNavMb'>HELADAS EN PERÚ</p>
                    </Link>
                    <Link to="Quienes-somos"
                        spy={true}
                        offset={0}
                        smooth={true}
                        duration={500}
                        onClick={()=> setOpen(false)}>
                        <p className='textNavMb'>¿QUIÉNES SOMOS?</p>
                    </Link>
                    <Link to="Conoce-que-donar"
                        spy={true}
                        offset={780}
                        smooth={true}
                        duration={500}
                        onClick={()=> setOpen(false)}>
                        <p className='textNavMb'>¿CÓMO COLABORAR?</p>
                    </Link>
                    <div className='max-w-[206px] mx-auto mt-[30px]'>
                            <BtnDonaAqui />
                    </div>
                </div>
            }
        </header>
    )
}
