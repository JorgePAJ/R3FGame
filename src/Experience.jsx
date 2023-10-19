import { Physics } from "@react-three/rapier";
import BlockLimbo from "@/components/Limbo/BlockLimbo";
import Lights from "@/Lights.jsx";
import Level from "@/Level.jsx";
import Player from "@/components/Player.jsx";
import BlockAxe from "@/components/Axe/BlockAxe";
import useGame from "@/stores/useGame";
import BlockSpinner from "@/components/Spinner/BlockSpinner";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      {/* <Perf /> */}
      <color args={["#bdedfc"]} attach="background" />
      <Physics>
        <Lights />
        <Level
          count={blocksCount}
          types={[BlockAxe, BlockLimbo, BlockSpinner]}
          seed={blocksSeed}
        />
        <Player />
      </Physics>
    </>
  );
}
