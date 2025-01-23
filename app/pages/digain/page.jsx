import React from 'react';

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="flex justify-around text-white p-8">
                {/* Figma */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <circle
                                className="text-orange-500"
                                strokeWidth="3"
                                strokeDasharray="100, 100"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            100%
                        </div>
                    </div>
                    <p className="mt-4 text-center">Figma</p>
                </div>

                {/* Adobe XD */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <circle
                                className="text-orange-500"
                                strokeWidth="3"
                                strokeDasharray="100, 100"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            100%
                        </div>
                    </div>
                    <p className="mt-4 text-center">Adobe XD</p>
                </div>

                {/* Adobe Photoshop */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <circle
                                className="text-orange-500"
                                strokeWidth="3"
                                strokeDasharray="85, 100"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            85%
                        </div>
                    </div>
                    <p className="mt-4 text-center">Adobe Photoshop</p>
                </div>

                {/* Adobe Illustrator */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <circle
                                className="text-orange-500"
                                strokeWidth="3"
                                strokeDasharray="60, 100"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            60%
                        </div>
                    </div>
                    <p className="mt-4 text-center">Adobe Illustrator</p>
                </div>

                {/* Adobe Premiere */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <circle
                                className="text-orange-500"
                                strokeWidth="3"
                                strokeDasharray="70, 100"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            70%
                        </div>
                    </div>
                    <p className="mt-4 text-center">Adobe Premiere</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
