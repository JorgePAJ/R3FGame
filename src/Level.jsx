import BlockStart from "@/components/BlockStart";
import * as THREE from "three";
import BlockSpinner from "@/components/Spinner/BlockSpinner";
import BlockLimbo from "@/components/Limbo/BlockLimbo";
import BlockAxe from "@/components/Axe/BlockAxe";
import BlockEnd from "@/components/BlockEnd";
import Block from "@/components/Reusability/Block";
import { useMemo } from "react";
import StringArrayToComponents from "@/lib/utils/ArrayToComponent";
import Bounds from "@/components/Bounds";

export default function Level({
  count = 5,
  types = ["start", "limbo", "axe", "spinner", "end"] || [
    BlockSpinner,
    BlockLimbo,
    BlockAxe,
  ],
}) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
  }, [count, types]);

  console.log(StringArrayToComponents(blocks));
  return (
    <>
      <Bounds length={count + 2} />
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((BlockType, i) => {
        if (typeof BlockType === "string") {
          return (
            <Block
              key={i}
              position={[0, 0, -(i + 1) * 4]}
              obstacleType={BlockType}
            />
          );
        } else {
          <BlockType key={i} />;
        }
      })}
      <BlockEnd position={[0, 0, -(blocks.length + 1) * 4]} />
    </>
  );
}
