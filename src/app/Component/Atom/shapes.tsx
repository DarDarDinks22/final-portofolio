import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment} from "@react-three/drei"
import { Suspense, useEffect, useRef, useState } from "react"
import {useFrame} from "@react-three/fiber"
import { gsap } from "gsap"

const RotatingSphere = () => {
    const ref = useRef<THREE.Mesh | null>(null);
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.4;
      }
    });
  
    return (
      <mesh ref={ref}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial wireframe color="#39ff14" />
      </mesh>
    );
  };

const Shapes = () => {

    return (
      <Canvas>
        <directionalLight position={[2, 1, 1]}/>
        <RotatingSphere/>
      </Canvas>    
    )
}

export default Shapes;