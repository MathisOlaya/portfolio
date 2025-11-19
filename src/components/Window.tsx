import { useState, type ReactNode } from "react";

// Interface PROPS
interface Props {
  icon: string;
  name: string;
  children: ReactNode;
  onCloseButtonClick: () => void;
}

interface CSSVariables extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

function Window({ icon, name, children, onCloseButtonClick }: Props) {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);
  const [mouseDown, setMouseDownState] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const style: CSSVariables = {
    "--top": `${top}%`,
    "--left": `${left}%`,
  };

  const handleDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent
  ) => {
    const div = document.getElementById("window");
    if (!div) return;

    const { x, y } = getClientXY(event);
    const rect = div.getBoundingClientRect();
    setOffset({ x: x - rect.left, y: y - rect.top });
    setMouseDownState(true);
  };

  const handleMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent
  ) => {
    if (!mouseDown) return;

    const div = document.getElementById("window");
    if (!div) return;

    const { x, y } = getClientXY(event);

    const leftPercentage =
      ((x - offset.x + div.offsetWidth / 2) / window.innerWidth) * 100;
    const topPercentage =
      ((y - offset.y + div.offsetHeight / 2) / window.innerHeight) * 100;

    setLeft(leftPercentage);
    setTop(topPercentage);
  };

  const getClientXY = (event: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in event) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    } else {
      return { x: event.clientX, y: event.clientY };
    }
  };

  return (
    <div
      id="window"
      style={style}
      className="
              absolute flex flex-col
              top-[var(--top)] left-[var(--left)] w-full -translate-x-1/2 -translate-y-1/2 aspect-[4/3]
              md:w-2/3 md:max-w-xl
              bg-gray-700
            "
    >
      <div
        onTouchStart={handleDown}
        onTouchMove={handleMove}
        onTouchEnd={() => setMouseDownState(false)}
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={() => setMouseDownState(false)}
        className="flex bg-black justify-between"
      >
        <div className="flex gap-2 items-center p-2">
          <img className="w-3 object-contain" src={icon} />
          <p>{name}</p>
        </div>
        <div>
          <button
            onClick={onCloseButtonClick}
            className="hover:bg-red-500 py-2 aspect-[7/3]"
          >
            X
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Window;
