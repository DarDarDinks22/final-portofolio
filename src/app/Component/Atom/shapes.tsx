import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Holo } from "./Holo"

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
      <Holo />
    </group>
  )
}

const Shapes = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 1, 1]} />
      <HoloRobot />
    </Canvas>
  )
}

export default Shapes