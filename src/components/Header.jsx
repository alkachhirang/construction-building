import React, { useState } from "react";
import { Searchicon } from "./IconImg";
import { Facebook } from "./IconImg";
import { Twitter } from "./IconImg";
import { Instagram } from "./IconImg";
import Buildingimg from '../assets/images/png/header-building-img.png';

const Header = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <>
            <div className="bg-white shadow ">
                <nav className="container xl:max-w-[1320px] flex justify-end items-center sm:pt-[43px] sm:pb-[35px] pt-[30px] pb-[30px] mx-auto md:px-6 px-[25px]">
                    <ul
                        className={`${show ? " left-[-100%]" : " left-0 z-10"
                            } gap-[51px] flex transition-all duration-300 ease-linear md:bg-white bg-white max-md:w-full max-md:fixed z-40 mx-md:top-0 max-md:min-h-screen max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:z-40 bottom-0`}
                    >
                        <li>
                            <a onClick={() => setshow(!show)}
                                className="text-[#025066] navlink uppercase transition-all duration-500 ease-linear flex font-normal text-[16px]"
                                href="#home"
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setshow(!show)}
                                className=" text-[#025066] navlink uppercase transition-all duration-500 ease-linear font-normal text-[16px] flex"
                                href="#portfolio"
                            >
                                PORTFOLIO
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setshow(!show)}
                                className=" text-[#025066] navlink uppercase  transition-all duration-500 ease-linear font-normal text-[16px]"
                                href="#blog"
                            >
                                BLOG
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setshow(!show)}
                                className=" text-[#025066] navlink uppercase transition-all duration-500 ease-linear font-normal text-[16px]"
                                href="#contact"
                            >
                                CONTACT
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setshow(!show)}
                                className=" text-[#025066] navlink uppercase transition-all duration-500 ease-linear font-normal text-[16px]"
                                href="#shop"
                            >
                                SHOP
                            </a>
                        </li>
                        <li className=" md:block hidden">
                            <a href="">
                                <Searchicon />
                            </a>
                        </li>
                    </ul>
                    <div className=" md:hidden block me-5">
                        <a href="">
                            <Searchicon />
                        </a>
                    </div>
                    <div
                        onClick={() => setshow(!show)}
                        className="w-[39px] h-[27px] relative z-50 flex flex-col justify-between md:hidden"
                    >
                        <span
                            className={`${show
                                ? " bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                                : "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[50deg] translate-y-[26px]"
                                }`}
                        ></span>
                        <span
                            className={`${show
                                ? " bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                                : "opacity-0"
                                }`}
                        ></span>
                        <span
                            className={`${show
                                ? " bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                                : "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[-50deg] translate-y-[50%]"
                                }`}
                        ></span>
                    </div>
                </nav>
            </div>

            <div id="home" className="bg-headerbg max-lg:h-[1000px] max-md:h-[890px] max-sm:h-[770px] sm:bg-bgsize bg-cover bg-no-repeat bg-center relative overflow-x-hidden">
                <div className=" container xl:max-w-[1320px] mx-auto md:px-6 px-[25px] overflow-hidden">
                    <div className="lg:pt-[155px] sm:pt-[90px] pt-[60px] pb-6 flex flex-row flex-wrap">
                        <div className=" lg:w-5/12 sm:pb-[20px] lg:pb-[0] pb-[15px]" data-aos="fade-right">
                            <h1 className=" text-white xl:text-[72px] lg:text-[57px] md:text-[46px] text-[36px] font-bold leading-[124.687%] lg:pb-[42px] pb-[20px]">
                                Morbi facilisis nulla purus, ac{" "}
                            </h1>
                            <p className=" text-lg !leading-[139.687%] font-normal text-white lg:pb-[61px] pb-[40px] ">
                                Mauris viverra justo et dictum mattis. Donec massa felis, tempus
                                nec erat id, fermentum rhoncus justo. Donec viverra quam nulla,
                                id faucibus metus ullamcorp
                            </p>
                            <button
                                className="hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear uppercase text-[#025066] text-[20px] font-medium py-[18px] px-[33px] cursor-pointer bg-white rounded-[10px] "
                                href=""
                            >
                                CONTACT NOW
                            </button>
                            <div className=" flex gap-[14px] lg:pt-[170px] pt-[50px] sm:pt-[60px]" data-aos="fade-up">
                                <div className="transition-all ease-linear duration-300 hover:scale-110">
                                    <Facebook />
                                </div>
                                <div className="transition-all ease-linear duration-300 hover:scale-110">
                                    <Twitter />
                                </div>
                                <div className="transition-all ease-linear duration-300 hover:scale-110">
                                    <Instagram />
                                </div>
                            </div>
                        </div>
                        <div className=" lg:w-7/12 pt-8 lg:pt-0">
                            <img
                                src={Buildingimg}
                                alt="Buildingimg"
                                className=" w-full lg:max-w-[980px] md:max-w-[780px] max-w-[550px] sm:max-w-[650px] !max-h-[511px] absolute lg:right-[-10px] right-[-23px] max-4xl:pl-40 max-2xl:pl-60 max-xl:ps-96 max-lg:ps-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
