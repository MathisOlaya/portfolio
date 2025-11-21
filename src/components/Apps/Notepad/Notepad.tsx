import React from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Interface Props
interface Props {
  content: string;
}

function Notepad({ content }: Props) {
  return (
    <div className="prose prose-slate text-slate-900 dark:text-slate-200 prose-headings:text-black prose-li:text-gray-300 p-4">
      <ReactMarkDown remarkPlugins={[remarkGfm]}>{content}</ReactMarkDown>
    </div>
  );
}

export default Notepad;
