import React from 'react';
import Building1 from '../assets/images/png/buildingimg-1.png';
import Building2 from '../assets/images/png/buildingimg-2.png';
import Building3 from '../assets/images/png/buildingimg-3.png';
import Building4 from '../assets/images/png/buildingimg-4.png';
import Building5 from '../assets/images/png/buildingimg-5.png';
import Building6 from '../assets/images/png/buildingimg-6.png';

const BuildingGallery = () => {
    return (
        <div id='shop' className='bg-[#025066] pt-[50px] pb-[50px] md:pt-[91px] md:pb-[92px] mt-[30px] md:mt-[50px] lg:mt-[0]'>
            <div className='container xl:max-w-[1320px] mx-auto md-px-6 px-[25px]'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px]' data-aos="fade-right">
                        <div>
                            <img src={Building1} alt="Building1" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px]' data-aos="fade-right">
                        <div>
                            <img src={Building2} alt="Building2" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px]' data-aos="fade-right">
                        <div>
                            <img src={Building3} alt="Building3" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px] lg:mb-[0]' data-aos="fade-left">
                        <div>
                            <img src={Building4} alt="Building4" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px] md:mb-[0]' data-aos="fade-left">
                        <div>
                            <img src={Building5} alt="Building5" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='lg:w-[32.50%] md:w-[48.50%] mb-[18px] md:mb-[0]' data-aos="fade-left">
                        <div>
                            <img src={Building6} alt="Building6" className='w-full hover:scale-[1.012] transition-all duration-300 ease-linear' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BuildingGallery
