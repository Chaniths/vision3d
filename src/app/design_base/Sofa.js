import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Sofa(props) {
  const { scene } = useGLTF("/models/sofa.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}
