import * as THREE from "three";
import Obstacle from "./Obstacle";
// Remember its always better and recommended to send directly the geometry and material as props for performance reasons, this way it do less calls, this are left in case no geometry or material is passed as props.
const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const blockMaterials = [
  new THREE.MeshStandardMaterial({ color: "limegreen" }),
  new THREE.MeshStandardMaterial({ color: "greenyellow" }),
];

export default function Block({
  position = [0, 0, 0],
  geometry = boxGeomtry,
  materials = blockMaterials,
  obstacleType,
}) {
  return (
    <group position={position}>
      <mesh
        geometry={geometry}
        material={obstacleType ? materials[1] : materials[0]}
        receiveShadow
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
      {obstacleType ? (
        <Obstacle type={obstacleType} position={position} />
      ) : null}
    </group>
  );
}
