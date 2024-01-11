import React from 'react';
import { Bluearrow } from './IconImg';
import Constructionimg from '../assets/images/png/construction-building.png';

const Construction = () => {
    return (
        <div className='md:pt-[114px] pt-[52px] pb-[50px] lg:pb-[151px] sm:pb-[80px]'>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className='lg:w-[55%] '>
                        <div className='flex gap-[30px] md:gap-[40px] lg:gap-[0] justify-between pb-[15px] lg:pb-[0]'>
                            <div className='border cursor-pointer hidden max-w-[141px] border-[#025066] border-solid sm:flex items-center justify-center flex-col md:pl-[42px] md:pr-[38px] md:pb-[23px] md:pt-[27px] pl-[27px] pr-[27px] pt-[18px] pb-[12px] ' data-aos="fade-right">
                                <p className='text_vertical text-[#025066] font-bold text-base m-0 md:pb-[23px] pb-[15px]'>HERE  WE  DO</p>
                                <div className='bg-[#025066] w-[1px] h-[168px]' ></div>
                                <p className='text-[#025066] text-[30px] md:text-[51px] font-medium md:pt-[27px] pt-[15px]'>01</p>
                            </div>
                            <div className=''data-aos="fade-down">
                                <h2 className='font-medium text-xl text-[#000000] uppercase leading-normal m-0'>OUR SERVICES</h2>
                                <p className='text-[#025066] text-[32px] sm:text-[41px] md:text-[48px] font-bold lg:max-w-[280px] m-0 pt-[16px] leading-[140%]'>Construction building.</p>
                                <p className='font-normal text-[14px] sm:text-[16px] text-[#025066] leading-[139%] md:max-w-[368px] m-0 lg:pt-[38px] pt-[10px] sm:pt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                                <div className='flex items-center gap-[13px] pt-[15px] sm:pt-[29px]'>
                                    <p className='cursor-pointer font-bold text-[16px] text-[#025066] leading-[120%] m-0'>VIEW PROJECTS</p>
                                    <Bluearrow />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border w-[100%] block sm:hidden border-[#025066] mt-[10px] border-solid items-center justify-center pl-[27px] pr-[27px] pt-[18px] pb-[12px]' data-aos="fade-right">
                        <div className='flex items-center justify-center'>
                            <p className=' text-[#025066] font-bold text-[14px] sm:text-base tracking-[1px] sm:tracking-[2px] whitespace-nowrap m-0 pr-[20px]'>HERE  WE  DO</p>
                            <div className='bg-[#025066] w-[60%] h-[1px]' ></div>
                            <p className='text-[#025066] text-[30px] md:text-[51px] font-medium m-0 pl-[20px]'>01</p>
                        </div>
                    </div>
                    <div className='lg:w-[40%] pt-[20px] sm:pt-[0]' data-aos="fade-left">
                        <img src={Constructionimg} alt="Constructionimg" className='w-full h-full lg:max-w-[503px] object-cover ml-auto' />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Construction
