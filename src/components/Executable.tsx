// HELPER
import TextHelper from "../helpers/TextHelper";

// Executable's PROPS
interface Props {
  name: string;
  icon: string;
}

function Executable(props: Props) {
  return (
    <div className="flex flex-col items-center px-4 py-1 border border-transparent hover:bg-gray-600 hover:border hover:border-white">
      <img className="h-12" draggable="false" src={props.icon} />
      <p className="mt-1 text-xs text-center max-w-[80px] break-words">
        {TextHelper.cutText(props.name, 25)}
      </p>
    </div>
  );
}

export default Executable;
