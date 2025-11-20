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
  const [currentFolderContent, setCurrentFolderContent] = useState<Folder | null>(null);

  const goToPreviousPath = () => {
    const allPath = PathHelper.splitPath(path);

    // remove last path
    const newPath = allPath.slice(0, -1).join('/');

    setPath(newPath);

    // update content
    getFolderContent(newPath, Storage);
  };

  const getFolderContent = (path: string, root: Folder | File) => {
    let current: Folder | File = root;

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
      <button onClick={goToPreviousPath}>Back</button>
      <p>{path}</p>
      <p>{currentFolderContent?.children['Zwap']?.type === 'file' ? currentFolderContent.children['Zwap'].content : null}</p>
    </div>
  );
}

export default Explorer;
