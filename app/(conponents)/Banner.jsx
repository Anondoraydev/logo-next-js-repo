import React from 'react';
const Banner = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='w-1/2 mt-[140px]'>
                <p className='text-[#707070] font-semibold text-2xl'>Hi I am</p>
                <p className='font-bold text-2xl text-[#959595] pt-2'>Mahmood Fazile</p>
                <h3 className='text-[#FD6F00] font-bold text-[70px]'>UI/UX designer</h3>
            </div>
            <div className='w-1/2'>
                <div className='bg-BannerBg opacity-50 text-red-400 bg-no-repeat  bg-cover pt-[40px]'>
                    
                </div>

            </div>
        </div>
    );
};

export default Banner;