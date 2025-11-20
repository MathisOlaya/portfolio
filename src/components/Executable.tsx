// Dependencies
import { type ReactNode } from 'react';

// HELPER
import TextHelper from '../helpers/TextHelper';

// Context
import { useAppManager } from '../managers/AppManager';

// Executable's PROPS
interface Props {
  name: string;
  icon: string;
  children: ReactNode;
}

function Executable(props: Props) {
  const { openApp } = useAppManager();

  return (
    <>
      <div className="flex flex-col items-center px-4 py-1 border border-transparent hover:bg-gray-600 hover:border hover:border-white" onDoubleClick={() => openApp(props.name, props.icon, props.children)}>
        <img className="h-12" draggable="false" src={props.icon} />
        <p className="mt-1 text-xs text-center max-w-[80px] break-words">{TextHelper.cutText(props.name, 25)}</p>
      </div>
    </>
  );
}

export default Executable;
