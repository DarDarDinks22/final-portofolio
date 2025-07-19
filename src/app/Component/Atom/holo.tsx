import * as React from 'react'
import { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export function Holo(props: React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null)
  const gltf = useGLTF('/3dModel/fluxs_pit_stop.glb') as GLTFResult

  const { nodes, materials } = gltf

  console.log('Material types:', Object.entries(materials).map(([k, v]) => [k, v.type]))

  const emissiveFrontMaterial = useMemo(() => {
    const original = materials.Front
    if (original && original instanceof THREE.MeshStandardMaterial) {
      const mat = original.clone()
      mat.emissive = new THREE.Color(0x00ffff)
      mat.emissiveIntensity = 2
      return mat
    } else {
      console.warn('ERR')
      return original 
    }
  }, [materials.Front])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[2.3, 2.3, 2.3]}
      position={[0, -1, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.039}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={emissiveFrontMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3dModel/fluxs_pit_stop.glb')