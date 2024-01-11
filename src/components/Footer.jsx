import React from 'react';
import Footerlogo from '../assets/images/png/footer-logo.png';
import { Footerinstagram, Footerfacebook } from './IconImg';


const Footer = () => {
    return (
        <>
            <div className='bg-[#025066] md:pt-[72px] md:pb-[68px] pt-[52px] pb-[52px] mt-[-2px]'>
                <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                    <div className='flex lg:flex-row flex-col lg:items-end lg:justify-between'>
                        <div>
                            <img src={Footerlogo} alt="Footerlogo" className='max-w-[87px]' />
                            <p className='lg:max-w-[433px] text-[#ffffff] text-[16px] font-normal leading-[139%] m-0 pt-[32px] pb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            <div className='flex gap-[15px]'>
                                <div className="transition-all ease-linear duration-300 hover:scale-110">
                                    <Footerinstagram />
                                </div>
                                <div className="transition-all ease-linear duration-300 hover:scale-110">
                                    <Footerfacebook />
                                </div>
                            </div>
                        </div>
                        <div className='flex sm:gap-[65px] gap-[40px] pt-[30px] lg:pt-[0]'>
                            <ul className='p-0'>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative  text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Renovation</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[21px] inline-block'>Carpentry</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Tiling</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-[-2px] after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%]'>Ceiling</a></li>
                            </ul>
                            <ul className='p-0'>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Renovation</a></li>
                                <li><a href='' className=' after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[21px] inline-block'>Carpentry</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Tiling</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-[-2px] after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%]'>Ceiling</a></li>
                            </ul>
                            <ul className='p-0'>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Renovation</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[21px] inline-block'>Carpentry</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%] mb-[17px] inline-block'>Tiling</a></li>
                                <li><a href='' className='after:w-[0] hover:after:w-[100%] after:bottom-[-2px] after:left-0 after:transition-all after:duration-500 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative text-[#ffffff] text-[16px] font-normal leading-[139%]'>Ceiling</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#033A49] pt-[21px] pb-[20px]'>
                <p className='text-[#ffffff] text-[16px] font-normal leading-[139%] text-center'>Copyright@IS Company2021 </p>
            </div>
        </>
    )
}

export default Footer
