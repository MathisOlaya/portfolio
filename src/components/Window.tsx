import {useState, type BaseSyntheticEvent, type ReactNode} from "react";

// Interface PROPS
interface Props {
    icon: string;
    name: string;
    children: ReactNode;
    onCloseButtonClick: () => void;
}

function Window({icon, name, children, onCloseButtonClick} : Props) {
    return (
        <div id="window" style={style} className="
              absolute flex flex-col
              top-[var(--top)] left-[var(--left)] w-full -translate-x-1/2 -translate-y-1/2 aspect-[4/3]
              md:w-2/3 md:max-w-xl
              bg-gray-700
            ">
                <div  onMouseDown={() => setMouseDownState(true)} onMouseMove={handleMouseMovement} onMouseUp={() => setMouseDownState(false)}  className="flex bg-black justify-between">
                    <div className="flex gap-2 items-center p-2">
                        <img className="w-3 object-contain" src={icon}/>
                        <p>{name}</p>
                    </div>
                    <div>
                        <button onClick={onCloseButtonClick} className="hover:bg-red-500 py-2 aspect-[7/3]" >X</button>
                    </div>
                </div>
            {children}
        </div>
