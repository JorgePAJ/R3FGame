import * as THREE from "three";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });

export default function BlockStart({
  position = [0, 0, 0],
  geometry = boxGeomtry,
  material = boxMaterial,
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
    </group>
  );
}
