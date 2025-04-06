"use client";
import { useState } from "react";

const data = [
  { id: 1, category: "Living Room", src: "/inspiration/image 36.svg" },
  { id: 2, category: "Kitchen", src: "/inspiration/image 38.svg" },
  { id: 3, category: "Bedroom", src: "/inspiration/image 40.svg" },
  { id: 4, category: "Bathroom", src: "/inspiration/image 41.svg" },
  { id: 5, category: "Living Room", src: "/inspiration/tempImagekKUZOx.svg" },
  { id: 6, category: "Bedroom", src: "/inspiration/tempImagen0GpSg.svg" },
  { id: 7, category: "Kitchen", src: "/inspiration/tempImageqxLQgE.svg" },
  // Add more images as needed
];

const categories = ["All rooms", "Living Room", "Kitchen", "Bedroom", "Bathroom"];

export default function ImageFilterGallery() {
  const [selected, setSelected] = useState("All rooms");

  const filteredImages =
    selected === "All rooms"
      ? data
      : data.filter((item) => item.category === selected);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Discover decor ideas and inspiration for your home
      </h2>
      <p className="text-gray-600 mb-4">
        Get Inspired By our community images to create your own design
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full border cursor-pointer ${
              selected === cat
                ? "bg-blue-100 text-blue-700 border-blue-400"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.category}
            className="w-full h-auto rounded-lg shadow-sm object-cover"
          />
        ))}
      </div>
    </div>
  );
}
