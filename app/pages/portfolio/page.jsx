import React from 'react';
import Image from 'next/image';
import cardLogo from '../../../public/image/a.png'
const page = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center '>
                <h3 className='text-[#FEFEFE] font-bold text-[40px] mt-10 '>Portfolio</h3>
                <p className='text-[#707070] text-xl font-medium  mb-[80px] mt-4'>User Interface and User Experience and Also video editing </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
                <div className='w-[415px]'>
                    <Image src={cardLogo} alt='cardLogo' />
                    <div className='flex justify-between p-5'>
                        <p className='text-[#C6C6C6] font-bold'>Name Project</p>
                        <p className='text-[#959595] font-bold'>Categories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;