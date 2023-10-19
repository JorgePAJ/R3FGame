import * as THREE from "three";
import { Center, Float, Text, Text3D } from "@react-three/drei";
import useGame from "../stores/useGame";
import { useEffect, useState } from "react";

const boxGeomtry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });

export default function BlockStart({
  position = [0, 0, 0],
  geometry = boxGeomtry,
  material = boxMaterial,
}) {
  const [isWelcomeShowing, setIsWelcomeShowing] = useState(true);

  useEffect(() => {
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === "playing") {
          setIsWelcomeShowing(false);
        }
      }
    );
  }, []);
  return (
    <group position={position}>
      {isWelcomeShowing ? (
        <Float>
          <Center position={[0, 1.3, -1]}>
            <Text3D
              font={"./assets/fonts/Geomanist_Medium.json"}
              size={0.75}
              height={0.2}
              scale={0.5}
            >
              Marble Race
              <meshStandardMaterial color="hotpink" />
            </Text3D>
            <Text3D
              font={"./assets/fonts/Geomanist_Medium.json"}
              size={0.75}
              height={0.2}
              scale={0.2}
              position={[0.5, -0.3, 0]}
            >
              Press a key to start!
              <meshStandardMaterial color="cyan" />
            </Text3D>
          </Center>
        </Float>
      ) : null}
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
