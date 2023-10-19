import Controls from "./Controls";
import RestartButton from "./RestartButton";
import Timer from "./Timer";
import useGame from "@/stores/useGame";
export default function Interface() {
  const { phase } = useGame();

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full font-geomanist">
      {/* Time */}
      <Timer />
      {phase === "ended" ? <RestartButton /> : null}
      <Controls />
    </div>
  );
}
