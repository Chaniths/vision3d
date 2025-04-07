"use client";

import React, { useState } from "react";

const roomData = {
  Livingroom: ["Sofa", "Coffee Table", "TV Stand"],
  Bedroom: ["Bed", "Wardrobe", "Nightstand"],
  Kitchen: ["Dining Table", "Cabinet", "Fridge"],
};

export default function SideBar() {
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
          {Object.keys(roomData).map((room) => (
            <div
              key={room}
              onClick={() => setSelectedRoom(room)}
              className={`cursor-pointer border rounded-md p-2 text-center hover:bg-green-50 ${
                selectedRoom === room ? "bg-green-100" : ""
              }`}
            >
              <div className="h-16 bg-gray-200 rounded mb-2" />
              <span className="font-medium text-sm">{room}</span>
            </div>
          ))}
        </div>
      )}

      {/* Furniture List */}
      {activeTab === "Categories" && (
        <div className="p-4">
          {selectedRoom ? (
            <div className="grid grid-cols-2 gap-4">
              {roomData[selectedRoom].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer border rounded-md p-2 text-center hover:bg-gray-100"
                >
                  <div className="h-16 bg-gray-200 rounded mb-2" />
                  <span className="text-sm">{item}</span>
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
