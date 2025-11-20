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

    // string to array of part
    const arrayPath = PathHelper.splitPath(path);

    for (const part of arrayPath) {
      if (current.type !== 'folder') return null;
      const next = current.children[part];
      if (!next) return null;
      current = next;
    }

    if (current.type === 'folder') {
      setCurrentFolderContent(current);
    }
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
