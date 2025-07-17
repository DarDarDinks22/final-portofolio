import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

const getRandomColor = () => {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

const WireBox = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const [color, setColor] =useState(getRandomColor())

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial
        color={color}
        emissive={hovered ? color : new THREE.Color('black')}
        emissiveIntensity={2}
        toneMapped={false}
        wireframe
      />
    </mesh>
  )
}

export default WireBox;