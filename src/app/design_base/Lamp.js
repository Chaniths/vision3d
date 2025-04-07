// Chair.js
"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Lamp({ position = [0, 0, 0], scale = [1, 1, 1] }) {
  const { scene } = useGLTF("/models/lamp.glb");
  return <primitive object={scene} position={position} scale={scale} />;
}
