import React from 'react';
import Image from 'next/image';
import bg from '../../public/image/bg.png';
import man from '../../public/image/man.png';
import { FaInstagram, FaLinkedin, FaFacebook, FaBehanceSquare } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                {/* Left Section */}
                <div className='w-full md:w-1/2 pt-5 md:pt-[140px] px-4 text-center md:text-left'>
                    <p className='text-[#707070] font-semibold text-xl md:text-2xl'>Hi, I am</p>
                    <p className='font-bold text-xl md:text-2xl text-[#959595] pt-2'>Mahmood Fazile</p>
                    <h3 className='text-[#FD6F00] font-bold text-4xl md:text-[70px] leading-tight'>UI/UX Designer</h3>
                    <div className='flex justify-center md:justify-start gap-4 text-white mt-4'>
                        <FaInstagram className='text-[#BABABA] text-2xl' />
                        <FaLinkedin className='text-[#BABABA] text-2xl' />
                        <FaFacebook className='text-[#BABABA] text-2xl' />
                        <FaBehanceSquare className='text-[#BABABA] text-2xl' />
                    </div>
                    <div className='mt-8 space-y-4 md:space-y-0 md:space-x-6'>
                        <button className='hover:bg-[#FD6F00] rounded-md text-[#959595] border border-solid hover:text-white py-2 px-6 text-lg font-bold'>Hire Me</button>
                        <button className='hover:bg-[#FD6F00] rounded-md text-[#959595] border border-solid hover:text-white py-2 px-6 text-lg font-bold'>Download CV</button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-black text-white p-6 md:p-10 rounded-lg shadow-md mt-8 md:mt-[60px] w-full md:w-[470px] mx-auto md:mx-0">
                        <div className="text-center mb-4 md:mb-0">
                            <p className="text-3xl font-bold text-orange-500">5+</p>
                            <p className="text-sm">Experiences</p>
                        </div>
                        <div className="text-center border-t md:border-t-0 md:border-l border-gray-600 px-4 pt-4 md:pt-0">
                            <p className="text-3xl font-bold text-orange-500">20+</p>
                            <p className="text-sm">Project done</p>
                        </div>
                        <div className="text-center border-t md:border-t-0 md:border-l border-gray-600 px-4 pt-4 md:pt-0">
                            <p className="text-3xl font-bold text-orange-500">80+</p>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='w-full md:w-1/2 relative'>
                    <Image src={man} alt='banner' className='h-[300px] md:h-[781px] w-auto mx-auto md:mx-0 relative z-10' />
                    <Image src={bg} alt='background' className='absolute top-20 md:top-44 right-0 md:right-20 w-[300px] md:w-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
