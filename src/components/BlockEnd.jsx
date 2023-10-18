import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });
export default function BlockEnd({
  position = [0, 0, 0],
  geometry = boxGeomtry,
  material = boxMaterial,
}) {
  const model = useGLTF("./hamburger.glb");
  model.scene.children.forEach((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <group position={position}>
      <mesh
        geometry={geometry}
        material={material}
        receiveShadow
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
      />
      <RigidBody
        type="fixed"
        colliders="hull"
        position={[0, 0.25, 0]}
        restitution={0.2}
        friction={0}
      >
        <primitive object={model.scene} position={[0, 0.5, 0]} scale={0.2} />
      </RigidBody>
    </group>
  );
}
