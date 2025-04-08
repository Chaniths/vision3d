import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ modelPath, position }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={position} />;
}
