"use client";

import React, { useState,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, TransformControls } from "@react-three/drei";
import Chair from "./components/Chair";
import Bed from "./components/Bed";
import Sofa from "./components/Sofa";
import Piano from "./components/Piano";
import Vas from "./components/Vas";
import Fridge from "./components/Fridge";
import Cabinet from "./components/Cabinet";
import Lamp from "./components/Lamp";
import Table from "./components/Table";
import Sink from "./components/Sink";
import Wardrobe from "./components/Wardrobe";
import SideBar from "./SideBar";

const Room = ({ width, length }) => {
  const wallHeight = 4;
  const wallThickness = 0.2;

  return (

    <group name="room">
      <mesh
        name="floor"
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#c9b8a7" />
      </mesh>

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
  const [width, setWidth] = useState(6);
  const [length, setLength] = useState(6);
  const [furniture, setFurniture] = useState([]);
  const [selected, setSelected] = useState(null);
  const orbitControlsRef = useRef();

  const handleAddFurniture = (type) => {
    const id = crypto.randomUUID();
    const defaultPos = [Math.random() * 4 - 2, 0, Math.random() * 4 - 2];
    setFurniture((prev) => [...prev, { id, type, position: defaultPos }]);
  };

  const handleCanvasClick = () => {
    // Unselect if clicked elsewhere
    setSelected(null);
  };

  return (
    <div className="flex h-screen mt-12">
      <SideBar onAddFurniture={handleAddFurniture} />
      <div className="flex-1 flex flex-col items-center p-4 overflow-hidden">
        <div className="w-full h-[500px] bg-gray-200 rounded">
          <Canvas camera={{ position: [10, 5, 10], fov: 50 }} onPointerMissed={handleCanvasClick}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enablePan={!selected} enableZoom={!selected} enableRotate={!selected} ref={orbitControlsRef} />

            {/* Orbit only in 3D */}
            {/* {viewMode === "3D" && (
              <OrbitControls enablePan enableZoom enableRotate />
            )} */}

            {furniture.map((item) => (
              <TransformControls key={item.id} position={item.position} onPointerDown={(e) => {
                e.stopPropagation();
                setSelected(item.id);
              }}>
                <group>
                  {item.type === "chair" && <Chair scale={[3.1, 3.1, 3.1]} />}
                  {item.type === "bed" && <Bed scale={[3.5, 3.5, 3.5]} />}
                  {item.type === "piano" && <Piano scale={[2.5, 2.5, 2.5]} />}
                  {item.type === "sofa" && <Sofa scale={[3.5, 3.5, 3.5]} />}
                  {item.type === "vas" && <Vas scale={[1.8, 1.8, 1.8]} />}
                  {item.type === "fridge" && (
                    <Fridge scale={[0.05, 0.05, 0.05]} />
                  )}
                  {item.type === "cabinet" && <Cabinet scale={[2, 2, 2]} />}
                  {item.type === "lamp" && <Lamp scale={[1.5, 1.5, 1.5]} />}
                  {item.type === "sink" && <Sink scale={[2, 2, 2]} />}
                  {item.type === "wardrobe" && (
                    <Wardrobe scale={[0.4, 0.4, 0.4]} />
                  )}
                  {item.type === "table" && <Table scale={[3, 3, 3]} />}
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

        <div className="mb-4 space-x-2 flex items-center mt-4">
          <label className="flex items-center space-x-2">
            <span className="font-medium">Width:</span>
            <input
              type="number"
              placeholder="Width"
              className="border px-2 py-1 rounded"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="font-medium">Length:</span>
            <input
              type="number"
              placeholder="Length"
              className="border px-2 py-1 rounded"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
