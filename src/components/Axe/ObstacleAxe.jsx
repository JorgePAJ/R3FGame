import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: "orangered",
});
export default function ObstacleAxe({
  material = obstacleMaterial,
  geometry = boxGeomtry,
  position,
}) {
  const obstacleRef = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = Math.sin(time + timeOffset) * 1.25;

    if (obstacleRef.current) {
      obstacleRef.current.setNextKinematicTranslation({
        x: position[0] + x,
        y: position[1] + 0.75,
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
        scale={[1.5, 1.5, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
