import React from 'react';
import { Bluearrow } from './IconImg';
import Uniqueimg from '../assets/images/png/unique-img.png';

const Unique = () => {
    return (
        <div className='lg:pb-[124px] sm:pb-[80px] pb-[52px]'>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex flex-row flex-wrap xl:items-end items-center '>
                    <div className='lg:w-5/12 pb-[40px] lg:pb-[0]' data-aos="fade-right">
                        <div className='lg:pr-[30px] xl:pr-[0]'>
                            <h2 className='font-medium text-xl text-[#000000] uppercase leading-normal m-0'>MAKE UNIQUE</h2>
                            <p className='text-[#025066] text-[32px] sm:text-[41px] md:text-[48px] font-bold lg:max-w-[280px] m-0 pt-[16px] leading-[140%]'>Construction building.</p>
                            <p className='font-normal text-[14px] sm:text-[16px] text-[#025066] leading-[139%] lg:max-w-[446px] m-0 lg:pt-[33px] pt-[10px] sm:pt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                            <div className='flex items-center gap-[13px] pt-[15px] lg::pt-[40px] sm:pt-[25px]'>
                                <p className='cursor-pointer font-bold text-[16px] text-[#025066] leading-[120%] m-0'>VIEW PROJECTS</p>
                                <Bluearrow />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-7/12' data-aos="fade-left">
                        <img src={Uniqueimg} alt="Uniqueimg" className='w-full h-full object-cover max-h-[465px] lg:max-w-[689px] ml-auto' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Unique
