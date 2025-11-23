import { useState, useEffect } from 'react';

// Manager
import { useAppManager } from '../../../managers/AppManager';

// Helpers
import PathHelper from '../../../helpers/PathHelper';

// Storage
import { Storage } from './Storage';
import type { Folder, File } from './Storage';

// Components
import Notepad from '../Notepad/Notepad';

// Icons
import { ArrowUp } from 'lucide-react';

// Interface Props
interface Props {
  path: string;
}

function Explorer(props: Props) {
  const [path, setPath] = useState(props.path);
  const [currentFolderContent, setCurrentFolderContent] = useState<Array<Folder | File>>([]);

  const { openApp } = useAppManager();

  const goToPreviousPath = () => {
    const allPath = PathHelper.splitPath(path);

    // remove last path
    const newPath = allPath.slice(0, -1).join('/');

    setPath(newPath);

    // update content
    setCurrentFolderContent(PathHelper.getFolderContent(newPath, Storage));
  };

  const goToPath = (folderName: string) => {
    const newPath = path + '/' + folderName;
    setPath(newPath);
    setCurrentFolderContent(PathHelper.getFolderContent(newPath, Storage));
  };

  useEffect(() => {
    setCurrentFolderContent(PathHelper.getFolderContent(path, Storage));
  }, []);

  return (
    <div>
      <div className="flex items-center px-4 gap-2 p-4">
        <ArrowUp color="white" className="hover:bg-gray-800" size={18} onClick={goToPreviousPath} />
        <p className="border w-full ">{path}</p>
      </div>
      <div className="flex px-4 ">
        {currentFolderContent.map((child) => {
          if (child.type === 'folder')
            return (
              <button className="p-2 flex flex-col gap-1 hover:bg-gray-800 items-center w-24" onClick={() => goToPath(child.name)} key={child.name}>
                <img className="w-8" src="/folder.png"></img>
                <p className="text-sm">{child.name}</p>
              </button>
            );
          if (child.type === 'file')
            return (
              <button className="flex flex-col p-2 hover:bg-gray-800 gap-1 items-center w-24" key={child.name} onClick={() => openApp(child.name, '/file.png', <Notepad path={path + '/' + child.name} />)}>
                <img className="w-12" src="/file.png"></img>
                <p className="text-sm">{child.name}</p>
              </button>
            );
        })}
      </div>
    </div>
  );
}

export default Explorer;
