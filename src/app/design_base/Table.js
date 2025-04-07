import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Table(props) {
  const { scene } = useGLTF("/models/table.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}
