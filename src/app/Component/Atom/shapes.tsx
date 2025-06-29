import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import {useFrame} from "@react-three/fiber"
import { Holo } from "./Holo"

  const RotatingSphere = () => {
    const ref = useRef<THREE.Mesh | null>(null);
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.05;
      }
    });
  
    return (
      <mesh ref={ref}>
        <Holo/>
        <meshStandardMaterial color="#b6b6b6" />
      </mesh>
    );
  };

const Shapes = () => {

    return (
      <div className="h-screen w-full">
        <Canvas>
          <directionalLight position={[2, 1, 1]}/>
          <RotatingSphere/>
        </Canvas>  
      </div>
        
    )
}

export default Shapes;