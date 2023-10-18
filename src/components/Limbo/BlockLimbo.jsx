import * as THREE from "three";
import ObstacleLimbo from "./ObstacleLimbo";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "greenyellow" });

export default function BlockLimbo({
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

      <ObstacleLimbo position={position} material={obstacleMaterial} />
    </group>
  );
}
