// components/Navbar.jsx
"use client"
// components/Navbar.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [viewMode, setViewMode] = useState('2D');

    return (
        <nav className="w-full bg-[#0A1930] text-white flex items-center px-6 py-3 fixed top-0 left-0 right-0 z-50 mb-20">
            {/* Left section with logo and main navigation */}
            <div className="flex items-center space-x-8">
                {/* Logo */}
                <Link href="/" className="mr-4">
                    <div className="text-white text-3xl font-bold">
                        <Image
                            src="/Vision3D_Logo.svg"
                            alt="Vision3D Logo"
                            width={85}
                            height={50}
                        />
                    </div>
                </Link>

                {/* Main navigation items */}
                <Link href="/projects" className="text-white font-medium hover:text-gray-300">
                    All projects
                </Link>

                <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.99999 10.8571 12 13.1428m-4.00001-2.2857L4 13.1428m3.99999-2.2857.00004-4.57139M12 13.1428v4.5715m0-4.5715-4.00001 2.2857M12 13.1428l4-2.2857m-4 2.2857V8.57143m0 4.57137 4 2.2858m-4 2.2857L7.99999 20M12 17.7143 16 20m-8.00001 0L4 17.7143v-4.5715M7.99999 20v-4.5715M4 13.1428l3.99999 2.2857M16 6.28571 12 4 8.00003 6.28571m7.99997 0v4.57139m0-4.57139-4 2.28572m4 2.28567 4 2.2858M8.00003 6.28571 12 8.57143m8 4.57147v4.5714L16 20m4-6.8571-4 2.2857M16 20v-4.5714" />
                    </svg>

                    <Link href="/floor/first" className="text-white font-medium hover:text-gray-300">
                        First Floor
                    </Link>
                </div>
            </div>

            {/* Middle section with undo/redo and view toggle */}
            <div className="flex-1 flex justify-center items-center space-x-6">
                {/* Undo/Redo buttons */}
                <div className="flex items-center space-x-3 mr-6">
                    <button className="p-1 hover:bg-gray-700 rounded-full">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
                        </svg>

                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded-full">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                        </svg>

                    </button>
                </div>

                {/* View toggle (2D/3D) */}
                <div className="bg-gray-700 rounded-lg inline-flex">
                    <button
                        className={`px-6 py-1 rounded-lg text-sm transition-colors ${viewMode === '2D' ? 'bg-white text-[#0A1930]' : 'text-gray-300'
                            }`}
                        onClick={() => setViewMode('2D')}
                    >
                        2D
                    </button>
                    <button
                        className={`px-6 py-1 rounded-lg text-sm transition-colors ${viewMode === '3D' ? 'bg-gray-200 text-[#0A1930]' : 'text-gray-300'
                            }`}
                        onClick={() => setViewMode('3D')}
                    >
                        3D
                    </button>
                </div>
            </div>

            {/* Right section with utility icons */}
            <div className="flex items-center space-x-4">
                <button className="p-1 hover:bg-gray-700 rounded-full">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </button>
                <button className="p-1 hover:bg-gray-700 rounded-full">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>


                </button>
                <button className="p-1 hover:bg-gray-700 rounded-full">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z" />
                    </svg>

                </button>
                <button className="p-1 hover:bg-gray-700 rounded-full">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                    </svg>

                </button>
                <button className="p-1 hover:bg-gray-700 rounded-full">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </button>
            </div>
        </nav>
    );
};

export default Navbar;