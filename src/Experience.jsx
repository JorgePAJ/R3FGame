import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Lights from "./Lights.jsx";
import Level from "./Level.jsx";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <Perf />
      <Physics debug>
        <Lights />
        <Level count={3} types={["spinner", "axe"]} />
      </Physics>
    </>
  );
}
