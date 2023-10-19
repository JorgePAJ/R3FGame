import useGame from "../../stores/useGame";

export default function Restart() {
  const restart = useGame((state) => state.restart);
  return (
    <div className="flex justify-center absolute top-[40%] left-0 w-full text-white text-[80px] bg-black/30 pointer-events-auto cursor-pointer hover:text-[#e3bfd4] transition-all duration-200 ">
      <button className="uppercase" onClick={restart}>
        Restart
      </button>
    </div>
  );
}
