import {useState, type BaseSyntheticEvent, type ReactNode} from "react";

// Interface PROPS
interface Props {
    icon: string;
    name: string;
    children: ReactNode;
    onCloseButtonClick: () => void;
}

