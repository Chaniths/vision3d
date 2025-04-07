import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Wardrobe(props) {
  const { scene } = useGLTF("/models/wardrobe.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}
