import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Obstacle from "./ObstacleSpinner";
// Remember its always better and recommended to send directly the geometry and material as props for performance reasons, this way it do less calls, this are left in case no geometry or material is passed as props.
const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "greenyellow" });

export default function BlockSpinner({
  position = [0, 0, 0],
  geometry = boxGeomtry,
  material = boxMaterial,
  obstacleMaterial,
}) {
  return (
    <group position={position}>
      <mesh
        geometry={geometry}
        material={material}
        receiveShadow
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
      <Obstacle geometry={geometry} material={obstacleMaterial} />
    </group>
  );
}
