import React from "react";
import Image from 'next/image';

export const Floor = () => {
    return (
        <>

            <div className="container pt-4 pl-3">
                <h2 className="text-2xl font-extrabold">Home ➡️ Create Floor Plan</h2>
                <div className="max-w-6xl mx-auto px-4 py-8">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-800 mb-12">Floor Plan Software</h1>

                        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Floor Plan Software To Create Plans</h2>

                        <div className="flex flex-col md:flex-row items-center gap-20 mt-12">
                            <div className=" w-full md:w-1/2">
                                <Image
                                    src="/Floor/image 31.svg"
                                    alt="Floor Plan Illustration"
                                    className="rounded-lg bg-emerald-100"
                                    height={650}
                                    width={650}
                                />
                            </div>

                            <div className="w-full md:w-2/3 text-left">
                                <p className="text-gray-600 leading-relaxed">
                                    Our floor plan software provides an intuitive and powerful tool to design both 2D and 3D plans
                                    with ease. Whether you're designing a cozy home or a large commercial space, our user-friendly
                                    interface allows you to create detailed floor layouts, customize designs, and add elements like
                                    furniture, appliances, and decorations. Perfect for homeowners, interior designers, contractors, and
                                    anyone looking to visualize their space, our platform lets you experiment with various
                                    configurations before starting your renovation. With drag-and-drop functionality and
                                    customizable templates, you don't need any technical expertise to bring your vision to life.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-20">
                        <div className="flex ml-7">
                            <div className="w-full md:w-2/3 text-left">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2 ">How to Create a Floor Plan</h2>
                                <p className="text-gray-600 mb-12 gap-8 ">
                                    Before diving into our planner, <br />
                                    let's explore three easy steps to achieving <br />
                                    the perfect layout.
                                </p>

                            </div>

                            <div className="flex  mb-16">

                                <div className="w-ful  md:w-1/2">
                                    <Image
                                        src="/Floor/image 24.svg"
                                        alt="3D Floor Plan Example"
                                        className="rounded-lg w-full h-auto"
                                        height={250}
                                        width={150}
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Steps */}
                        <div className="space-y-16">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-8">

                                <div className="w-full md:w-2/5">
                                    <Image
                                        src="/Floor/image 26.svg"
                                        alt="Template Selection"
                                        className="rounded-lg bg-blue-100"
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Begin with a Template</h3>
                                    <p className="text-gray-600">
                                        Kickstart your design journey by choosing from the available templates. If you want a custom
                                        look, start from scratch and create your design on a blank canvas
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Structural Design</h3>
                                    <p className="text-gray-600">
                                        Easily design your space with intuitive drag-and-drop features that let you
                                        add walls, doors, and windows. These tools help you create a detailed layout
                                        and structure with accuracy and ease.
                                    </p>
                                </div>

                                <div className="w-full md:w-2/5">
                                    <Image
                                        src="/Floor/image 28.svg"
                                        alt="Structural Design"
                                        className="rounded-lg"
                                        height={650}
                                        width={450}
                                    />
                                </div>
                            </div>

                            {/* Step 3 */}

                            <div className="flex flex-col md:flex-row items-center gap-8">

                                <div className="w-full -md:w-2/5">
                                    <Image
                                        src="/Floor/image 30.svg"
                                        alt="3D Preview"
                                        className="rounded-lg"
                                        height={650}
                                        width={450}
                                    />
                                </div>
                                <div className="w-full md:w-1/5 flex justify-center">
                                    <div className="bg-blue-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
                                        3
                                    </div>
                                </div>

                                <div className="w-full md:w-2/5">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Finalize and Preview</h3>
                                    <p className="text-gray-600">
                                        Customize your space by incorporating furniture, appliances, and decor. When you're
                                        happy with the layout, switch to 3D view for a realistic preview, allowing you to refine any
                                        details before completing your design.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}