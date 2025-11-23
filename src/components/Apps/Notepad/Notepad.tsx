import { useEffect, useState } from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// HELPERS
import PathHelper from '../../../helpers/PathHelper';

// Storage
import { Storage } from '../Explorer/Storage';
import type { File } from '../Explorer/Storage';

// Interface Props
interface Props {
  path: string;
}

function Notepad({ path }: Props) {
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const fileResult = PathHelper.getFile(path, Storage);
    setFile(fileResult);
  }, []);
  return (
    <div className="prose prose-slate text-slate-900 dark:text-slate-200 prose-headings:text-black prose-li:text-gray-300 p-4">
      <ReactMarkDown remarkPlugins={[remarkGfm]}>{file?.content}</ReactMarkDown>
    </div>
  );
}

export default Notepad;
