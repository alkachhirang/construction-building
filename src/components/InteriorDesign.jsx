import React from 'react';
import { useState } from 'react';
import Interiordesign from '../assets/images/png/interior-design.png';
import { Bluearrow } from './IconImg';
import { Playicon } from './IconImg';

const InteriorDesign = () => {
    const [showmodal, setshowmodal] = useState(false)
    if (showmodal === true) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className='lg:pb-[105px] sm:pb-[80px] pb-[52px]'>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex flex-col-reverse lg:flex-row flex-wrap xl:items-end mr-auto'>
                    <div className='lg:w-7/12 relative' data-aos="fade-right">
                        <img src={Interiordesign} alt="Interiordesign" className='lg:h-[479px]' />
                        <div onClick={() => setshowmodal(true)} className='absolute right-0 left-0 bottom-0 top-0 flex justify-center items-center'>
                            <Playicon/>
                        </div>
                        {showmodal ? (
                            <>
                                <div className='fixed z-10 top-0 left-0 h-full min-h-screen backdrop-blur-sm w-full flex items-center justify-center bg-[rgba(2,80,102,0.67)]'>
                                    <div className='bg-[#025066] p-3 rounded-[5px] relative'>
                                        <iframe className='sm:w-[550px] w-[300px] sm:h-[380px] h-[230px]' src="https://www.youtube.com/embed/j38ta0U59us?si=v1OlKL5WPEiGHKju" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay: clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        <div className='flex items-center justify-end mt-5'>
                                            <button onClick={() => setshowmodal(false)} className='mt-4 text-end py-3 rounded-[4px] group hover:bg-[#ffffff] px-8 border border-solid border-[#ffffff]'><p className='text-[16px] font-medium group-hover:text-[#025066] text-[#ffffff]'>Close</p></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}

                    </div>
                    <div className='lg:w-5/12 pb-[40px] lg:pb-[0]' data-aos="fade-left">
                        <div className='lg:max-w-[474px] ml-auto'>
                            <h2 className='font-medium text-[20px] text-[#000000] lg:text-end m-0 pb-[16px]'>MAKE UNIQUE</h2>
                            <p className='font-bold text-[29px] sm:text-[42px] md:text-[48px] text-[#025066] lg:text-end m-0 leading-[110%] pb-[24px]'>Solutions interior design</p>
                            <p className='font-normal text-[16px] text-[#025066B2] leading-[139%] lg:max-w-[368px] ml-auto lg:text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                            <div className='flex items-center gap-[13px] lg:justify-end pt-[29px]'>
                                <p className='cursor-pointer font-bold text-[16px] text-[#025066] leading-[120%] m-0'>VIEW PROJECTS</p>
                                <Bluearrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InteriorDesign
