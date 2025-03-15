import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment} from "@react-three/drei"
import { Suspense, useEffect, useRef, useState } from "react"
import {useFrame} from "@react-three/fiber"
import { gsap } from "gsap"
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { Text } from "@react-three/drei"

const BackgroundSphere = () => {
    const ref = useRef<THREE.Mesh | null>(null);
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.05;
      }
    });
  
    return (
      <mesh ref={ref}>
        <sphereGeometry args={[20, 32, 16]} />
        <meshStandardMaterial wireframe color="green" />
      </mesh>
    );
  };

  const RotatingSphere = () => {
    const ref = useRef<THREE.Mesh | null>(null);
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.05;
      }
    });
  
    return (
      <mesh ref={ref}>
        <sphereGeometry args={[2.5, 32, 16]} />
        <meshStandardMaterial wireframe color="#b6b6b6" />
      </mesh>
    );
  };

const Shapes = () => {

    return (
      <div className="h-screen w-full">
        <Canvas>
          <directionalLight position={[10, 1, 1]}/>
          <BackgroundSphere/>
          <RotatingSphere/>
        </Canvas>  
      </div>
        
    )
}

export default Shapes;