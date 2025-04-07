// Chair.js
"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Fridge({ position = [0, 0, 0], scale = [1, 1, 1] }) {
  const { scene } = useGLTF("/models/fridge.glb");
  return <primitive object={scene} position={position} scale={scale} />;
}
