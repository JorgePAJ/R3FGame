import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });

export default function ObstacleLimbo({
  material = obstacleMaterial,
  geometry = boxGeomtry,
  type = "spinner",
  position,
}) {
  const obstacleRef = useRef();
  //   This also handles the direction of the obstacle
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (type === "spinner") {
      const rotation = new THREE.Quaternion();
      rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));

      if (obstacleRef.current) {
        obstacleRef.current.setNextKinematicRotation(rotation);
      }
    } else if (type === "limbo") {
      const y = Math.sin(time) + 1.15;
      if (obstacleRef.current) {
        obstacleRef.current.setNextKinematicTranslation({
          x: position[0],
          y: position[1] + y,
          z: position[2],
        });
      }
    } else if (type === "axe") {
      const y = Math.sin(time) + 1.15;
      if (obstacleRef.current) {
        obstacleRef.current.setNextKinematicTranslation({
          x: position[0],
          y: position[1] + y,
          z: position[2],
        });
      }
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
        scale={type === "axe" ? [1.5, 1.5, 0.3] : [3.5, 0.3, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
