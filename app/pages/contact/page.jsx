import React from 'react';

const page = () => {
    return (
        <div className='max-w-7xl mx-auto mb-32 px-4'>
            <div className='text-center'>
                <h3 className='text-[#FEFEFE] font-bold text-[40px] mt-10'>Portfolio</h3>
                <p className='text-[#707070] text-xl font-medium mb-[80px] mt-4'>
                    User Interface and User Experience and Also video editing
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='w-full'>
                    <input type="text" placeholder='Name' className='p-3 w-full mb-5 rounded-md' />
                    <input type="number" placeholder='Phone Number' className='p-3 w-full mb-5 rounded-md' />
                    <input type="text" placeholder='Timeline' className='p-3 w-full' />
                </div>
                <div className='w-full'>
                    <input type="text" placeholder='Email' className='p-3 w-full mb-5 rounded-md' />
                    <input type="text" placeholder='Service of Interest' className='p-3 w-full mb-5 rounded-md' />
                    <textarea name="" id="" placeholder='Project Details...' className='p-5 w-full h-40 rounded-md'></textarea>
                    <div className="flex justify-end p-4">
                        <button className="bg-[#707070] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
