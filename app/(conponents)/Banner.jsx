import React from 'react';
import Image from 'next/image';
import bg from '../../public/image/bg.png'
import man from '../../public/image/man.png'
import { FaInstagram, FaLinkedin, FaFacebook, FaBehanceSquare } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='flex'>
                <div className='w-1/2 pt-[140px]'>
                    <p className='text-[#707070] font-semibold text-2xl'>Hi I am</p>
                    <p className='font-bold text-2xl text-[#959595] pt-2'>Mahmood Fazile</p>
                    <h3 className='text-[#FD6F00] font-bold text-[70px]'>UI/UX designer</h3>
                    <div className='flex gap-4 text-white '>
                        <FaInstagram className='text-[#BABABA]' />
                        <FaLinkedin className='text-[#BABABA]' />
                        <FaFacebook className='text-[#BABABA]' />
                        <FaBehanceSquare className='text-[#BABABA]' />
                    </div>
                    <div className='mt-[60px] mb-[80px] space-x-12'>
                        <button className='hover:bg-[#FD6F00] rounded-md text-[#959595] border border-solid-2 hover:text-white py-1 px-6 text-[20px] font-bold'>Hire Me</button>
                        <button className='hover:bg-[#FD6F00] rounded-md text-[#959595] border border-solid-2 hover:text-white py-1 px-6 text-[20px] font-bold'>Downlead CV </button>
                    </div>
                    <div className="flex justify-around items-center bg-black text-white p-10 rounded-lg shadow-md w-[470px]">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-orange-500">5+</p>
                            <p className="text-sm">Experiences</p>
                        </div>
                        <div className="text-center border-l border-gray-600 px-4">
                            <p className="text-3xl font-bold text-orange-500">20+</p>
                            <p className="text-sm">Project done</p>
                        </div>
                        <div className="text-center border-l border-gray-600 px-4">
                            <p className="text-3xl font-bold text-orange-500">80+</p>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                    </div>

                </div>
                <div className='w-1/2 pt-5 relative'>
                    <Image src={man} alt='banner' className='h-[781px] w-[520px] relative z-10' />
                    <Image src={bg} alt='banner' className=' absolute top-44 right-20  ' />
                </div>
            </div>
        </div>
    );
};

export default Banner;