"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";

export default function RoomCanvas({ models }) {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7]} intensity={1} />
            <OrbitControls />
            <Environment preset="city" />

            {/* Show all added models */}
            {models.map((model, index) => (
                <Model
                    key={index}
                    modelPath={model.path}
                    position={[index * 2, 0, 0]} // Spread them horizontally
                />
            ))}
        </Canvas>
    );
}
