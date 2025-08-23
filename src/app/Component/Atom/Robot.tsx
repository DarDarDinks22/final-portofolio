import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useRef, useEffect, useState } from "react"
import { Holo } from "./Holo"

const HoloRobot = () => {
  const meshRef = useRef<THREE.Group>(null!)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // track mouse relative to window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePos({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

useFrame(() => {
  if (meshRef.current) {
    const maxRotation = 0.4
    const targetX = THREE.MathUtils.clamp(mousePos.y * maxRotation, -maxRotation, maxRotation)
    const targetY = THREE.MathUtils.clamp(mousePos.x * maxRotation, -maxRotation, maxRotation)

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1)
  }
})

  return (
    <group ref={meshRef}>
      <Holo />
    </group>
  )
}

const Robot = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5] }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, -5]} />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
      </EffectComposer>
      <HoloRobot />
    </Canvas>
  )
}

export default Robot