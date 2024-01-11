import React from 'react';
import Slider from "react-slick";
import Girlimg from '../assets/images/png/girl-img.png';
import { Star } from './IconImg';
import { Rightarrow } from './IconImg';
import { Leftarrow } from './IconImg';


const Testimonials = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        // fade:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='md:pt-[88px] md:pb-[124px] pt-[52px] pb-[52px] '>
            <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-medium text-[20px] text-[#000000] m-0 leading-normal pb-[19px]' data-aos="fade-down">TESTIMONIALS</h2>
                    <p className='text-[#025066] font-bold text-[35px] sm:text-[48px] m-0 leading-normal pb-[49px]' data-aos="fade-down">What Clients say about us</p>
                </div>
                <div className='relative' data-aos="fade-down">
                    <div onClick={() => slider?.current?.slickPrev()} className='absolute z-[4] max-w-[49px] right-[20%] top-[15%]'>
                        <Rightarrow />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className='absolute z-[4] max-w-[49px] left-[20%] top-[15%]'>
                        <Leftarrow />
                    </div>

                    <Slider ref={slider} {...settings}>
                        <div className='!flex items-center justify-center flex-col'>
                            <img src={Girlimg} alt="Girlimg" className='w-full text-center max-w-[126px] pb-[19px]' />
                            <p className='text-[#025066] text-[16px] font-bold leading-normal m-0 pb-[30px] text-center'>TREGSDKH</p>
                            <Star />
                            <p className='pt-[18px] m-0 text-[#025066] font-normal text-[16px] leading-[139%] max-w-[469px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        </div>
                        <div className='!flex items-center justify-center flex-col'>
                            <img src={Girlimg} alt="Girlimg" className='w-full text-center max-w-[126px] pb-[19px]' />
                            <p className='text-[#025066] text-[16px] font-bold leading-normal m-0 pb-[30px] text-center'>TREGSDKH</p>
                            <Star />
                            <p className='pt-[18px] m-0 text-[#025066] font-normal text-[16px] leading-[139%] max-w-[469px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        </div>
                        <div className='!flex items-center justify-center flex-col'>
                            <img src={Girlimg} alt="Girlimg" className='w-full text-center max-w-[126px] pb-[19px]' />
                            <p className='text-[#025066] text-[16px] font-bold leading-normal m-0 pb-[30px] text-center'>TREGSDKH</p>
                            <Star />
                            <p className='pt-[18px] m-0 text-[#025066] font-normal text-[16px] leading-[139%] max-w-[469px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        </div>
                    </Slider>

                </div>
            </div>

        </div>

    )
}

export default Testimonials
