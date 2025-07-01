import * as React from 'react';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    Back: THREE.Material;
    Front: THREE.Material;
  };
};

export function Holo(props: React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/3dModel/fluxs_pit_stop.glb') as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null} scale={[2.5,2.5,2.5]} position={[0,-1,0]}>
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
          material={materials.Front}
          emissive="#00ffff" emissiveIntensity={2}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/3dModel/fluxs_pit_stop.glb');