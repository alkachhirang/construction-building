import React from 'react';
import Gateconstruction from '../assets/images/png/gate-construction-img.png';

const GateConstruction = () => {
    return (
        <div className='md:pt-[83px] md:pb-[83px] pt-[52px] pb-[52px]'>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <div className='lg:w-6/12 pb-[20px] lg:pb-[0]' data-aos="fade-right">
                        <div>
                            <h2 className='font-medium text-[20px] text-[#000000] leading-normal m-0 pb-[18px] sm:pb-[25px]'>OTHER SERVICES</h2>
                            <p className='text-[#025066] sm:text-[41px] text-[32px] md:text-[48px] font-bold leading-[120%] m-0 pb-[20px] sm:pb-[30px] md:pb-[44px] lg:max-w-[420px]'>Gates Construction Company</p>
                            <p className='text-[#025066] leading-[139%] font-normal text-[25px] m-0 pb-[10px] sm:pb-[17px]'>Best Builing Material</p>
                            <p className='font-normal text-[14px] sm:text-[16px] text-[#025066] leading-[139%] pb-[33px] m-0 lg:max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            <p className='text-[#025066] leading-[139%] font-normal text-[25px] m-0 pb-[10px] sm:pb-[17px]'>Experience Workers</p>
                            <p className='font-normal text-[14px] sm:text-[16px] text-[#025066] leading-[139%] pb-[33px] m-0 lg:max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            <p className='text-[#025066] leading-[139%] font-normal text-[25px] m-0 pb-[10px] sm:pb-[17px]'>Modern Technologies</p>
                            <p className='font-normal text-[14px] sm:text-[16px] text-[#025066] leading-[139%] pb-[33px] m-0 lg:max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        </div>
                    </div>
                    <div className='lg:w-6/12'data-aos="fade-left">
                        <div>
                            <img src={Gateconstruction} alt="Gateconstruction" className='w-full' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default GateConstruction
