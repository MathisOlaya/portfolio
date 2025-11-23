import type { Folder, File } from '../components/Apps/Explorer/Storage';

class PathHelper {
  splitPath = (path: string) => {
    return path.split('/');
  };

  getFolderContent(pathDestination: string, root: Folder | File): Array<Folder | File> {
    let storage = root;
    let content: (Folder | File)[] = [];
    // string to array of part
    const arrayPath = this.splitPath(pathDestination);

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
    return content;
  }

  getFile(pathDestination: string, root: Folder | File): File {
    const folder = this.getFolderContent(pathDestination, root);

    const file = folder.find((child) => child.type === 'file' && child.name === this.splitPath(pathDestination).pop());

    if (!file || file.type !== 'file') {
      throw new Error('File not found');
    }

    return file;
  }
}

export default new PathHelper();
