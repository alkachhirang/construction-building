import React from 'react';
import Loremimg1 from '../assets/images/png/lorem-img1.png';
import Loremimg2 from '../assets/images/png/lorem-img-2.png';
import Loremimg3 from '../assets/images/png/lore-img3.png';
import { Bluearrow } from './IconImg';


const LoremCards = () => {
    const data = [
        {
            image: Loremimg1,
            content: 'Lorem ipsum dolo ',
            content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper ',
            content3: 'VIEW PROJECTS',
        },
        {
            image: Loremimg2,
            content: 'Lorem ipsum dolo ',
            content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper ',
            content3: 'VIEW PROJECTS',
        },
        {
            image: Loremimg3,
            content: 'Lorem ipsum dolo ',
            content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper ',
            content3: 'VIEW PROJECTS',
        },
    ]
    return (
        <div id='blog' className='bg-[#025066] md:pt-[92px] pt-[60px] md:pb-[85px] pb-[52px] md:mt-[50px] mt-[30px] lg:mt-[0]'>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex flex-row flex-wrap lg:justify-between justify-center md:gap-[35px] lg:gap-[0] items-center'>
                    {data.map((a, index) => (
                        <div key={index} className='lg:w-[32.30%] md:w-[47%] md:mb-[7px] mb-[24px] cursor-pointer ' data-aos="zoom-in-down">
                            <div className='rounded-[5px] bg-[#ffffff] hover:scale-[1.012] transition-all duration-300 ease-linear shadow-[9px_16px_32px_0px rgba(0,_0,_0,_0.25)] px-[15px] pt-[15px] pb-[26px]'>
                                <img src={a.image} alt="image" className='rounded-[5px] mb-[20px] w-full' />
                                <p className='m-0 text-[#025066] text-[25px] font-bold leading-[139%] pb-[11px]'>{a.content}</p>
                                <p className='text-[#025066B2] leading-[139%] font-normal text-[16px] m-0 pb-[24px] md:max-w-[382px]'>{a.content2}</p>
                                <div className='flex items-center gap-[8px]'>
                                    <p className='cursor-pointer text-[#025066] font-bold text-[16px] leading-[120%] m-0'>{a.content3} </p>
                                    <Bluearrow />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default LoremCards
