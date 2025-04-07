"use client";
import React, { useState } from "react";

const roomData = {
  Livingroom: {
    items: [
      { name: "Sofa", image: "/design_base/sofa.jpg" },
      { name: "Chair", image: "/design_base/chair.jpg" },
      { name: "Piano", image: "/design_base/piano.jpg" },
      { name: "Vas", image: "/design_base/vas.jpg" },
    ],
    image: "/design_base/livingroom.svg",
  },
  Bedroom: {
    items: [
      { name: "Bed", image: "/design_base/bed.jpg" },
      { name: "Lamp", image: "/design_base/lamp.jpg" },
      { name: "Wardrobe", image: "/design_base/wardrobe.jpg" },
    ],
    image: "/design_base/bedroom.svg",
  },
  Kitchen: {
    items: [
      { name: "Table", image: "/design_base/table.jpg" },
      { name: "Cabinet", image: "/design_base/cabinet.png" },
      { name: "Fridge", image: "/design_base/fridge.png" },
      { name: "Sink", image: "/design_base/sink.jpg" },
    ],
    image: "/design_base/kitchen.svg",
  },
};

export default function SideBar({ onAddFurniture }) {
  const [activeTab, setActiveTab] = useState("Rooms");
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="w-72 h-screen bg-white border-r shadow-md flex flex-col">
      {/* Tabs */}
      <div className="flex">
        {["Rooms", "Categories"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 p-3 font-semibold border-b-2 ${
              activeTab === tab
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Room Selection */}
      {activeTab === "Rooms" && (
        <div className="p-4 grid grid-cols-2 gap-4">
          {Object.entries(roomData).map(([room, { image }]) => (
            <div
              key={room}
              onClick={() => setSelectedRoom(room)}
              className={`cursor-pointer border rounded-md p-2 text-center hover:bg-green-50 ${
                selectedRoom === room ? "bg-green-100" : ""
              }`}
            >
              <img
                src={image}
                alt={room}
                className="h-16 w-full object-cover rounded mb-2"
              />
              <span className="font-medium text-sm">{room}</span>
            </div>
          ))}
        </div>
      )}

      {/* Furniture Items */}
      {activeTab === "Categories" && (
        <div className="p-4">
          {selectedRoom ? (
            <div className="grid grid-cols-2 gap-4">
              {roomData[selectedRoom].items.map(({ name, image }) => (
                <div
                  key={name}
                  onClick={() => onAddFurniture(name.toLowerCase())}
                  className="cursor-pointer border rounded-md p-2 text-center hover:bg-gray-100"
                >
                  <img
                    src={image}
                    alt={name}
                    className="h-16 w-full object-cover rounded mb-2"
                  />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm text-center">
              Select a room first in the "Rooms" tab.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
