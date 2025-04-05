"use client";

import Image from "next/image";
import { useState } from "react";

export default function HomeSolutionSection() {
  const [activeCamera, setActiveCamera] = useState("Camera 1");

  return (
    <div className="bg-white max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Vision for the Future</h1>
        <p className="text-lg text-gray-700">
          The ultimate all-in-one home solution for every need.
        </p>
      </div>

      {/* 360 Work through section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/home_solution_section/image 18.svg" // Replace with your actual image path
              alt="Room interior view"
              width={500}
              height={350}
              className="w-full object-cover"
            />
            
            {/* Camera selection */}
            <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 shadow-md flex items-center space-x-1">
              <span className="text-sm">{activeCamera}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* 360 indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white bg-opacity-75 rounded-full p-3 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">360 Work through</h2>
          <p className="text-gray-700">
            Immerse your clients in a realistic and interactive 360° tour of your projects.
          </p>
        </div>
      </div>

      {/* Mood boards section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-3">Mood boards</h2>
          <p className="text-gray-700">
            Collect images, ideas and inspiration easily to personalize your space.
          </p>
        </div>
        {/* <div className="order-1 md:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-2">
                <div className="text-xs mb-1">Color</div>
                <div className="relative h-32 bg-gradient-to-br from-yellow-300 to-pink-500 rounded-lg">
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="h-4 mt-2 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="order-1 md:order-2">
          <Image
            src="/home_solution_section/image 19.svg" // Replace with your actual image path
            alt="Designer accessing designs on laptop"
            width={500}
            height={350}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Import 3D models section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="relative">
          <div className="bg-amber-50 rounded-lg p-4 flex justify-center items-center">
            <div className="relative">
              <Image
                src="/home_solution_section/image 20.svg" // Replace with your actual image path
                alt="Office chair 3D model"
                width={200}
                height={200}
                className="mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white text-xs px-2 py-1 inline-block mt-2 rounded">
            Drag and drop
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Import 3D models</h2>
          <p className="text-gray-700">
            Easily import custom 3D models to enrich your designs with personalized elements.
          </p>
        </div>
      </div>

      {/* Access Anywhere section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-3">Access Anywhere</h2>
          <p className="text-gray-700">
            Access to your designs from anywhere and Seamlessly toggle between budget and luxury options.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/home_solution_section/tempImagep16n8k.svg" // Replace with your actual image path
            alt="Designer accessing designs on laptop"
            width={500}
            height={350}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}