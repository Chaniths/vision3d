import React from "react";

export default function DesignSideBar() {
  return (
    <div className="w-60 bg-[#EDE6D4] p-3 m-4 rounded-lg shadow-md flex flex-col gap-y-4">
      <div className="bg-white px-6 py-5  rounded-md shadow text-center">
        <p className="text-sm text-black font-bold leading-snug">
          Welcome to the design page of vision 3D. Get Inspired and start your
          projects and use the guidelines we have given to you and start
          building your dream home and make your dreams a reality
        </p>
        <img
          src="/design_pages_images/chair.svg"
          alt="Chair"
          className="mt-3 w-auto h-auto object-contain rounded-md"
        />
      </div>

      <div className="bg-[#d4d2cd] p-3 rounded-md shadow">
        <h3 className="font-mavenpro text-sm font-bold text-gray-800 mb-2">
          New Articles on Design
        </h3>
        <ul className="space-y-2 text-xs">
          <li className="bg-white text-gray-800 font-bold  p-2 rounded shadow hover:shadow-md transition">
            Bring new Beach designs to your houses
          </li>
          <li className="bg-white text-gray-800 font-bold p-2 rounded shadow hover:shadow-md transition">
            Transform Your Home with Rustic Designs
          </li>
          <li className="bg-white text-gray-800 font-bold p-2 rounded shadow hover:shadow-md transition">
            Blending Vintage and Contemporary Designs
          </li>
          <li className="text-blue-600 underline cursor-pointer hover:text-blue-800">
            Show All Articles
          </li>
        </ul>
      </div>
    </div>
  );
}
