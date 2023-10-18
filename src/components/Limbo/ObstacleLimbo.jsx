import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: "orangered",
});
export default function ObstacleLimbo({
  geometry = boxGeomtry,
  position,
  material = obstacleMaterial,
}) {
  const obstacleRef = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(time) + 1.15;

    if (obstacleRef.current) {
      obstacleRef.current.setNextKinematicTranslation({
        x: position[0],
        y: position[1] + y,
        z: position[2],
      });
    }
  });

  return (
    <RigidBody
      ref={obstacleRef}
      type="kinematicPosition"
      position={[0, 0.3, 0]}
      restitution={0.2}
      friction={0}
    >
      <mesh
        geometry={geometry}
        material={material}
        scale={[3.5, 0.3, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
