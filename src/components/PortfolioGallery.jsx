import React from 'react'

const PortfolioGallery = () => {
    return (
        <div>
            <div id='portfolio' className='pb-[17px]'>
                <div className='container xl:max-w-[1320px] mx-auto md-px-6 px-[25px]'>
                    <div className='flex flex-row flex-wrap justify-between lg:items-end'>
                        <div data-aos="fade-right">
                            <div className='border hidden max-w-[141px] border-[#025066] border-solid lg:flex items-center justify-center flex-col lg:pl-[37px] lg:pr-[38px] lg:pb-[23px] lg:pt-[40px] cursor-pointer'>
                                <p className='text_vertical text-[#025066] font-bold text-base m-0 tracking-[3px]'>GALLERY  WORKS</p>
                                <div className='bg-[#025066] w-[1px] h-[110px]' ></div>
                                <p className='text-[#025066] text-[30px] md:text-[51px] font-medium pt-[27px]'>03</p>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <h3 className='font-bold sm:text-[42px] text-[30px] md:text-[48px] text-[#025066] lg:text-end lg:max-w-[482px] leading-[110%] ml-auto m-0'>Our Portfolio Gallery</h3>
                            <p className='text-[#025066B2] font-normal leading-[139%] text-[14px] sm:text-[16px] m-0 lg:pt-[51px] pt-[20px] lg:text-end lg:pb-[49px] pb-[15px] lg:max-w-[656px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque </p>
                        </div>
                        <div className='border cursor-pointer w-[100%] block lg:hidden  border-[#025066] mt-[10px] border-solid items-center justify-center pl-[27px] pr-[27px] pt-[18px] pb-[12px]'data-aos="fade-right">
                            <div className='flex items-center justify-center'>
                                <p className=' text-[#025066] font-bold text-[14px] sm:text-base teacking-[1px] sm:tracking-[2px] whitespace-nowrap m-0 pr-[20px]'>GALLERY  WORKS</p>
                                <div className='bg-[#025066] w-[60%] h-[1px]' ></div>
                                <p className='text-[#025066] text-[30px] md:text-[51px] font-medium m-0 pl-[20px]'>03</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PortfolioGallery
