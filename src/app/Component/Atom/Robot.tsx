import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef } from "react"
import { Holo } from "./Holo"
import WireBox from "./WireBox"

const HoloRobot = () => {
  const meshRef = useRef<THREE.Group>(null!)
  const { mouse } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      const maxRotation = 0.4
      const targetY = THREE.MathUtils.clamp(mouse.x * maxRotation, -maxRotation, maxRotation)
      const targetX = THREE.MathUtils.clamp(mouse.y * maxRotation, -maxRotation, maxRotation)

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -targetX,
        0.1
      )
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetY,
        0.1
      )
    }
  })

  return (
    <group ref={meshRef}>
      <Holo/>
    </group>
  )
}
 const Robot = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, -5]} />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
      </EffectComposer>
      <HoloRobot />
      
    </Canvas>
  )
}

export default Robot;