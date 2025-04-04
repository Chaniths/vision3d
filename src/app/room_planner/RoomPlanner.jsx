import React from 'react';
import Image from 'next/image';

export const RoomPlanner = () => {
    return (
        <div>
            <h2>Home -- Design your room</h2>

            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Room Planner tool</h2>
            </div>



            {/*  1 st Section  */}
            <div className="flex flex-col md:flex-row items-center gap-8  pl-25">

                <div className="w-full md:w-2/5">
                    <Image
                        src="./room_planner_Pictures/Laundry and dry cleaning-amico 1.svg"
                        alt="3D Preview"
                        className="rounded-lg"
                        height={450}
                        width={350}
                    />
                </div>
                {/* <div className="w-full md:w-1/5 flex justify-center">
                    <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                        3
                    </div>
                </div> */}

                <div className="w-full md:w-2/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3"></h3>
                    <p className="text-gray-600">
                        Create your dream room easily with our free 3D <br />
                        room planner, no design skills or special software <br />
                        needed! Just drag and drop items from our large<br /> product library to design a space that fits your<br />
                        style.

                    </p>
                    <br />

                    <p className="text-gray-600">
                        With our tool, you can see your room in both 2D <br />
                        and 3D, view it from any angle, and make quick <br />
                        changes. If something doesn’t look right, simply <br />
                        click to remove or replace it. No need to draw <br />
                        plans by hand Vision-3D makes designing simple.<br />
                        Try different colors, materials, and furniture to <br />
                        bring your perfect space to life!


                    </p>
                </div>

            </div>


            {/* 2nd Section */}

            <div className="flex flex-col md:flex-row items-center gap-8  pl-25">


                <div className="w-full md:w-2/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">How to plan your <br />room design with <br />Vision 3D</h3>
                    <p className="text-gray-600">
                        Designing stylish and practical rooms has <br />never been simpler! Here's how you can  <br /> create your ideal space using Vision 3D

                    </p>


                </div>

                <div className="w-full md:w-2/5">
                    <Image
                        src="/room_planner_Pictures/Screenshot_2025-03-21_112851-removebg-preview 1.svg"
                        alt="3D Preview"
                        className="rounded-lg"
                        height={450}
                        width={350}
                    />
                </div>
                {/* <div className="w-full md:w-1/5 flex justify-center">
                                        <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                                         3
                                    </div>
                                    </div> */}


            </div>



            {/* 3rd Section */}

            <div className="flex flex-col md:flex-row items-center gap-8  pl-25">

                <div className="w-full md:w-1/5">
                    <Image
                        src="/room_planner_Pictures/images 1.svg"
                        alt="3D Preview"
                        className="rounded-lg"
                        height={450}
                        width={350}
                    />


                </div>
                <div className="w-full md:w-1/5 flex justify-center pl-30">
                    <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                        1
                    </div>
                </div>


                <div className="w-full md:w-3/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Plan Your Room in 2D</h3>
                    <p className="text-gray-600">
                        Start by designing your room’s layout and <br />
                        setting the right dimensions. Place windows,<br />
                        doors, and walls, then tweak them until you <br />
                        achieve the ideal arrangement. You can either<br />
                        use one of our ready-made templates or create <br />
                        a custom layout from scratch.

                    </p>
                </div>

            </div>

            <br />



            {/* 4th Section  */}

            <div className="flex flex-col md:flex-row items-center gap-8 ">

                <div className="w-full md:w-1/5 flex justify-center pl-30">
                    <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                        2
                    </div>
                </div>


                <div className="w-full md:w-1/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Select Furniture and Decor</h3>
                    <p className="text-gray-600 ">
                        Easily add items from our library by <br />
                        dragging and dropping them into your <br />
                        space. Swap pieces anytime and try <br />
                        out different layouts, furniture, and <br />
                        finishes. Get a realistic preview of your <br />
                        room before finalizing the design.
                    </p>
                    <br />


                </div>



                <div className="w-full md:w-3/5">
                    <Image
                        src="/room_planner_Pictures/50619c103185605.5f48c330e8895 1.svg"
                        alt="3D Preview"
                        className="rounded-lg"
                        height={450}
                        width={350}
                    />
                </div>



            </div>

            <br />



            {/* 5th Section */}

            <div className="flex flex-col md:flex-row items-center gap-8 ">

                <div className="w-full md:w-1/3 pl-20">
                    <Image
                        src="/room_planner_Pictures/Screenshot_2025-03-21_113641-removebg-preview 1.svg"
                        alt="3D Preview"
                        className="rounded-lg"
                        height={550}
                        width={550}
                    />
                </div>

                <div className="w-full md:w-1/5 flex justify-center pl-20">
                    <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                        3
                    </div>
                </div>



                <div className="w-full md:w-3/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Explore Your Room in 3D</h3>
                    <p className="text-gray-600">
                        Instantly view your design in 3D and take <br />
                        virtual walkthroughs as you refine your space.<br />
                        Easily switch between 2D and 3D without any  <br />
                        technical skills, making the design process <br />
                        smooth and effortless.
                    </p>
                    <br />

                </div>

            </div>



        </div>

    );
};