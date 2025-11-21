import { useState, useEffect } from 'react';

// Helpers
import PathHelper from '../../../helpers/PathHelper';

// Storage
import { Storage } from './Storage';
import type { Folder, File } from './Storage';

// Interface Props
interface Props {
  path: string;
}

function Explorer(props: Props) {
  const [path, setPath] = useState(props.path);
  const [currentFolderContent, setCurrentFolderContent] = useState<Array<Folder | File>>([]);

  const goToPreviousPath = () => {
    const allPath = PathHelper.splitPath(path);

    // remove last path
    const newPath = allPath.slice(0, -1).join('/');

    setPath(newPath);

    // update content
    getFolderContent(newPath, Storage);
  };

  const goToPath = (folderName: string) => {
    const newPath = path + '/' + folderName;
    setPath(newPath);
    getFolderContent(newPath, Storage);
  };

  const getFolderContent = (pathDestination: string, root: Folder | File) => {
    let storage = root;
    let content: (Folder | File)[] = [];
    // string to array of part
    const arrayPath = PathHelper.splitPath(pathDestination);

    for (let i = 0; i < arrayPath.length; i++) {
      // for root (entry)
      if (i === 0) {
        if (storage.type !== 'folder') continue;
        content = storage.children;
        continue;
      }

      // get children based on name
      const child = content.find((child) => child.name === arrayPath[i] && child.type === 'folder');

      if (!child || child.type !== 'folder') continue;

      // save children for next iteration
      content = child.children;
    }
    setCurrentFolderContent(content);
  };

  useEffect(() => {
    getFolderContent(path, Storage);
  }, []);

  return (
    <div>
      <button className="px-4 py-2" onClick={goToPreviousPath}>
        Back
      </button>
      <p className="border m-4">{path}</p>
      <div className="flex px-4 ">
        {currentFolderContent.map((child) => {
          if (child.type === 'folder')
            return (
              <button className="p-2 flex flex-col gap-1 hover:bg-gray-800 items-center" onClick={() => goToPath(child.name)} key={child.name}>
                <img className='w-8' src="/folder.png"></img><p className="text-sm">{child.name}</p>
              </button>
            );
          if (child.type === 'file')
            return (
              <p className="p-4" key={child.name}>
                Fichier: {child.name}
              </p>
            );
        })}
      </div>
    </div>
  );
}

export default Explorer;
