import { useKeyboardControls } from "@react-three/drei";
import { cn } from "@/lib/utils/ClassNames";
import { cva } from "class-variance-authority";
import {
  ArrowDownKeyDown,
  ArrowDownKeyUp,
  ArrowLeftKeyDown,
  ArrowLeftKeyUp,
  ArrowUpKeyDown,
  ArrowUpKeyUp,
  ArrowRightKeyDown,
  ArrowRightKeyUp,
  SpaceKeyDown,
  SpaceKeyUp,
} from "@/lib/utils/EventSimulator";
export default function Controls() {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const controlsClasses = {
    controls: "fixed bottom-[10%] left-0 w-full",
    row: cn("flex justify-center"),
    key: cva(
      [
        "w-[40px]",
        "h-[40px]",
        " m-[4px]",
        " border-2",
        "border-white",
        " bg-white/40",
        "transition-all ,duration-200",
        "pointer-events-auto ",
        "cursor-pointer",
        "hover:bg-white/70 active:bg-white/80",
        "select-none",
      ],
      {
        variants: {
          pressed: {
            true: "bg-white/70",
          },
        },
        defaultVariants: {
          intent: "active",
        },
      }
    ),
    space: cva(
      [
        "w-[144px]",
        "h-[40px]",
        " m-[4px]",
        " border-2",
        "border-white",
        " bg-white/40",
        "transition-all ,duration-200",
        "pointer-events-auto ",
        "cursor-pointer",
        "select-none",
        "hover:bg-white/70 active:bg-white/80",
      ],
      {
        variants: {
          pressed: {
            true: "bg-white/70",
          },
        },
        defaultVariants: {
          intent: "active",
        },
      }
    ),
  };

  return (
    <div className={controlsClasses.controls}>
      <div className={controlsClasses.row}>
        <div
          className={controlsClasses.key({
            pressed: forward,
          })}
          onPointerDown={ArrowUpKeyDown}
          onPointerUp={ArrowUpKeyUp}
          onPointerLeave={ArrowUpKeyUp}
        ></div>
      </div>
      <div className={controlsClasses.row}>
        <div
          className={controlsClasses.key({
            pressed: leftward,
          })}
          onPointerDown={ArrowLeftKeyDown}
          onPointerUp={ArrowLeftKeyUp}
          onPointerLeave={ArrowLeftKeyUp}
        ></div>
        <div
          className={controlsClasses.key({
            pressed: backward,
          })}
          onPointerDown={ArrowDownKeyDown}
          onPointerUp={ArrowDownKeyUp}
          onPointerLeave={ArrowDownKeyUp}
        ></div>
        <div
          className={controlsClasses.key({
            pressed: rightward,
          })}
          onPointerDown={ArrowRightKeyDown}
          onPointerUp={ArrowRightKeyUp}
          onPointerLeave={ArrowRightKeyUp}
        ></div>
      </div>
      <div className={controlsClasses.row}>
        <div
          className={controlsClasses.space({
            pressed: jump,
          })}
          onPointerDown={SpaceKeyDown}
          onPointerUp={SpaceKeyUp}
          onPointerLeave={SpaceKeyUp}
        ></div>
      </div>
    </div>
  );
}
