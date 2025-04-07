import React from "react";
import Image from "next/image";

export default function RoomPlanner() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl px-4 py-8">
      <h2 className="text-gray-800 font-bold text-2xl mb-6">Home ➡️ Design your room</h2>


        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Room Planner Tool
          </h2>
        </div>

        {/* 1st Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/room_planner_Pictures/Laundry and dry cleaning-amico 1.svg"
              alt="3D Preview"
              className="rounded-lg"
              height={450}
              width={350}
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-4">
              Create your dream room easily with our free 3D room planner, no
              design skills or special software needed! Just drag and drop items
              from our large product library to design a space that fits your
              style.
            </p>
            <p className="text-gray-600">
              With our tool, you can see your room in both 2D and 3D, view it
              from any angle, and make quick changes. If something doesn’t look
              right, simply click to remove or replace it. Try different colors,
              materials, and furniture to bring your perfect space to life!
            </p>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              How to plan your room design with Vision 3D
            </h3>
            <p className="text-gray-600">
              Designing stylish and practical rooms has never been simpler!
              Here's how you can create your ideal space using Vision 3D.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/room_planner_Pictures/Screenshot_2025-03-21_112851-removebg-preview 1.svg"
              alt="3D Preview"
              className="rounded-lg"
              height={450}
              width={350}
            />
          </div>
        </div>

        {/* 3rd Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <Image
              src="/room_planner_Pictures/images 1.svg"
              alt="3D Preview"
              className="rounded-lg"
              height={450}
              width={350}
            />
          </div>
          <div className="w-full md:w-1/6 flex justify-center">
            <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
              1
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Plan Your Room in 2D
            </h3>
            <p className="text-gray-600">
              Start by designing your room’s layout and setting the right
              dimensions. Place windows, doors, and walls, then tweak them until
              you achieve the ideal arrangement.
            </p>
          </div>
        </div>

        {/* 4th Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/6 flex justify-center">
            <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
              2
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Select Furniture and Decor
            </h3>
            <p className="text-gray-600">
              Easily add items from our library by dragging and dropping them
              into your space. Try out different layouts and get a realistic
              preview before finalizing your design.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/room_planner_Pictures/50619c103185605.5f48c330e8895 1.svg"
              alt="3D Preview"
              className="rounded-lg"
              height={450}
              width={350}
            />
          </div>
        </div>

        {/* 5th Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/room_planner_Pictures/Screenshot_2025-03-21_113641-removebg-preview 1.svg"
              alt="3D Preview"
              className="rounded-lg"
              height={550}
              width={550}
            />
          </div>
          <div className="w-full md:w-1/6 flex justify-center">
            <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
              3
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Explore Your Room in 3D
            </h3>
            <p className="text-gray-600">
              Instantly view your design in 3D and take virtual walkthroughs as
              you refine your space. Switch between 2D and 3D without technical
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
