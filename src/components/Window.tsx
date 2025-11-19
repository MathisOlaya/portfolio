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
            {children}
        </div>
