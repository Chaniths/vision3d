// components/Chair.js
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Table(props) {
  const { scene } = useGLTF("/models/table.glb"); // Place model in public/models/
  return <primitive object={scene} scale={0.5} {...props} />;
}
