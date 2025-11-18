// Dependencies
import { useRef, useState } from "react";

// HELPER
import TextHelper from "../helpers/TextHelper";

// Executable's PROPS
interface Props {
  name: string;
  icon: string;
}

function Executable(props: Props) {
  const [executableVisible, setExecutableVisible] = useState(false);

  return (
    <>
      <div
        className="flex flex-col items-center px-4 py-1 border border-transparent hover:bg-gray-600 hover:border hover:border-white"
        onDoubleClick={() => setExecutableVisible(true)}
      >
        <img className="h-12" draggable="false" src={props.icon} />
        <p className="mt-1 text-xs text-center max-w-[80px] break-words">
          {TextHelper.cutText(props.name, 25)}
        </p>
      </div>
      {executableVisible ? (
        <div className="absolute top-1/4 left-1/4 bg-gray-700 p-2 w-[600px] h-[400px]">
          <p>Application : {props.name}</p>
          <button onClick={() => setExecutableVisible(false)}>Close me</button>
        </div>
      ) : null}
    </>
  );
}

export default Executable;
