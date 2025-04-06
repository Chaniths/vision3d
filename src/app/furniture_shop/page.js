import React from 'react'
import Image from "next/image";

export default function Furniture_shop() {
    return (
        <>
            <div className="container pt-4 pl-3">
                <h2 className="text-2xl font-extrabold">Home ➡️ Furnish and Decorate</h2>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-800 mb-12">
                            Furniture Shop
                        </h1>

                        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
                            To Furnish Your Space with Ease
                        </h2>

                        {/* First Section */}
                        <div className="flex flex-col md:flex-row items-center gap-20 mt-12">
                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/furniturShop/Furniture store-bro-Photoroom (1) 1.svg"
                                    alt="Furniture Illustration"
                                    className="rounded-lg bg-emerald-100"
                                    height={450}
                                    width={450}
                                />
                            </div>

                            <div className="w-full md:w-2/3 text-left">
                                <p className="text-gray-600 leading-relaxed">
                                    Find the Perfect Furniture for Your Space. Easily explore bedroom,
                                    living room, kitchen, bathroom, and lounge area furniture with our
                                    well-organized categories. Browse a wide range of stylish and
                                    functional pieces displayed in high-quality images for a clear view
                                    of your options.
                                    Enjoy a smooth and hassle-free experience—no special skills or extra
                                    costs required. Discover different styles, materials, and designs to
                                    create a space that truly reflects your taste!
                                </p>
                            </div>
                        </div>

                        {/* Second Section (Duplicate) */}
                        <div className="flex flex-col md:flex-row items-center gap-20 mt-12">

                            <div className="w-full md:w-2/3 text-left">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    How to furnish your
                                    room with Vision 3D
                                </h3>
                                <p className="text-gray-600 leading-relaxed">

                                    Furnishing your space has never been
                                    easier! Explore a variety of furniture
                                    options and find the perfect pieces for
                                    your room with Vision 3D.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/furniturShop/Pierisim_ Image 1.svg"
                                    alt="Furniture Illustration"
                                    className="rounded-lg bg-emerald-100"
                                    height={450}
                                    width={450}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div className="mt-20 space-y-20">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-2/5">
                                <Image
                                    src="/furniturShop/Abd_design_hub_ I will create nice 3d floor plan, interior, exterior, walkthrough for $10 on fiverr_com.svg"
                                    alt="Select Category"
                                    className="rounded-lg"
                                    height={450}
                                    width={350}
                                />
                            </div>

                            <div className="w-full md:w-1/5 flex justify-center">
                                <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                                    1
                                </div>
                            </div>

                            <div className="w-full md:w-2/5">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    Select a Furniture Category
                                </h3>
                                <p className="text-gray-600">
                                    Choose the type of room you want to furnish—bedroom, living room,
                                    kitchen, bathroom, or lounge area. Each category offers a carefully
                                    curated selection of furniture to match your style and needs.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/5 flex justify-center">
                                <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                                    2
                                </div>
                            </div>

                            <div className="w-full md:w-2/5">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    Pick Your Furniture
                                </h3>
                                <p className="text-gray-600">
                                    Browse through high-quality images of furniture pieces and select
                                    the ones that fit your vision. From cozy sofas to modern kitchen
                                    cabinets, you have plenty of options to explore.
                                </p>
                            </div>

                            <div className="w-full md:w-2/5">
                                <Image
                                    src="/furniturShop/download 1.svg"
                                    alt="Pick Furniture"
                                    className="rounded-lg"
                                    height={450}
                                    width={350}
                                />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-2/5">
                                <Image
                                    src="/furniturShop/contact-Img.svg"
                                    alt="Customize and Arrange"
                                    className="rounded-lg"
                                    height={450}
                                    width={350}
                                />
                            </div>

                            <div className="w-full md:w-1/5 flex justify-center">
                                <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                                    3
                                </div>
                            </div>

                            <div className="w-full md:w-2/5">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    Customize and Arrange
                                </h3>
                                <p className="text-gray-600">
                                    Place your chosen furniture exactly where you want it. Move, rotate,
                                    and adjust items to create the perfect layout. Experiment with
                                    different arrangements until your space feels just right!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
