import BlockStart from "@/components/BlockStart";
import BlockLimbo from "@/components/Limbo/BlockLimbo";
import BlockAxe from "@/components/Axe/BlockAxe";
import BlockSpinner from "@/components/Spinner/BlockSpinner";
import BlockEnd from "@/components/BlockEnd";

export default function StringToComponent(str) {
  const components = {
    start: BlockStart,
    limbo: BlockLimbo,
    axe: BlockAxe,
    spinner: BlockSpinner,
    end: BlockEnd,
  };

  return components[str];
}
