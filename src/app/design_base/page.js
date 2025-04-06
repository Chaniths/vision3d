"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, TransformControls } from "@react-three/drei";
import Chair from "./Chair";
import Bed from "./Bed";
import Sofa from "./Sofa";
import Table from "./Table";
import BookShelf from "./BookShelf";

const Room = ({ width, length }) => {
  const wallHeight = 3;
  const wallThickness = 0.1;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#c9b8a7" />
      </mesh>
      <mesh position={[0, wallHeight / 2, -length / 2]}>
        <boxGeometry args={[width, wallHeight, wallThickness]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, wallHeight / 2, length / 2]}>
        <boxGeometry args={[width, wallHeight, wallThickness]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-width / 2, wallHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, wallHeight, length]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[width / 2, wallHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, wallHeight, length]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export default function RoomGenerator() {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(5);
  const [furniture, setFurniture] = useState([]);

  // const handleAddFurniture = (type) => {
  //   const id = crypto.randomUUID(); // Unique ID
  //   const defaultPos = [Math.random() * 2 - 1, 0, Math.random() * 2 - 1];
  //   setFurniture((prev) => [
  //     ...prev,
  //     { id, type, position: defaultPos, rotation: [0, 0, 0] },
  //   ]);
  // };

  const handleAddFurniture = (type) => {
    const id = crypto.randomUUID();
    const defaultPos = [
      Math.random() * 4 - 2, // X: -2 to 2
      0,
      Math.random() * 4 - 2, // Z: -2 to 2
    ];
    setFurniture((prev) => [...prev, { id, type, position: defaultPos }]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4 space-x-2">
        <input
          type="number"
          placeholder="Width"
          className="border px-2 py-1 rounded"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Length"
          className="border px-2 py-1 rounded"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleAddFurniture("chair")}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add Chair
        </button>
        <button
          onClick={() => handleAddFurniture("bed")}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Add Bed
        </button>
        <button
          onClick={() => handleAddFurniture("bookshelf")}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Add BookShelf
        </button>
        <button
          onClick={() => handleAddFurniture("sofa")}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Add Sofa
        </button>
      </div>

      <div className="w-full h-[500px] bg-gray-200 rounded">
        <Canvas camera={{ position: [10, 5, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enablePan enableZoom enableRotate />

          {/* {furniture.map((item) => (
            <TransformControls key={item.id} mode="translate">
              {item.type === "chair" && (
                <Chair position={item.position} scale={[3.1, 3.1, 3.1]} />
              )}
              {item.type === "bed" && (
                <Bed position={item.position} scale={[3.5, 3.5, 3.5]} />
              )}
            </TransformControls>
          ))} */}

          {furniture.map((item) => (
            <TransformControls key={item.id} position={item.position}>
              <group>
                {item.type === "chair" && <Chair scale={[3.1, 3.1, 3.1]} />}
                {item.type === "bed" && <Bed scale={[3.5, 3.5, 3.5]} />}
                {item.type === "bookshelf" && <BookShelf scale={[3, 3, 3]} />}
                {item.type === "sofa" && <Sofa scale={[3.5, 3.5, 3.5]} />}
              </group>
            </TransformControls>
          ))}

          <Grid
            position={[0, -0.051, 0]}
            args={[100, 100]}
            cellSize={1}
            cellThickness={0.5}
            cellColor={"#cccccc"}
            sectionSize={5}
            sectionThickness={1}
            sectionColor={"#999999"}
            fadeDistance={30}
            fadeStrength={1}
            infiniteGrid={true}
          />

          <Room width={width} length={length} />
        </Canvas>
      </div>
    </div>
  );
}
