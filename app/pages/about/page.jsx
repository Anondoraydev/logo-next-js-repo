import React from 'react';
import Image from 'next/image';
import man2 from '../../../public/image/man2.png'
import { TiDownload } from "react-icons/ti";
const page = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <div className='text-center '>
                <h3 className='text-[#FEFEFE] font-bold text-[40px] mt-10 '>About Me</h3>
                <p className='text-[#707070] text-xl font-medium  mb-[80px] mt-4'>User Interface and User Experience and Also video editing </p>
            </div>

            <div className="card card-side shadow-xl">
                <figure>
                    <Image
                        src={man2}
                        alt="Movie" width={566} height={800} />
                </figure>
                <div className="card-body w-1/2 mt-[150px] bg-[#FFFFFF]">
                    <p className='text-[20px] font-medium text-[#959595] leading-10'> A software engineer, the modern-day architect of digital realms, navigates the ethereal
                        landscapes of code, sculpting intangible structures that shape our technological world.
                        With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic,
                        their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse
                        where lines of code dance in intricate patterns, weaving the fabric of programs and applications.
                        Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative
                        designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches
                        like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling
                        the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
                    <div className="card-actions ">
                        <button className='bg-[#FD6F00] rounded-md border border-solid-2 text-white py-1 px-6 text-[20px] font-bold flex gap-2 items-center '><TiDownload/> Downlead CV </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;