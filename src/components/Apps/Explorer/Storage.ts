export type File = {
  type: 'file';
  name: string;
  content: string;
};

export type Folder = {
  type: 'folder';
  name: string;
  children: Array<File | Folder>;
};

export const Storage: Folder = {
  name: 'C:',
  type: 'folder',
  children: [
    {
      name: 'Program',
      type: 'folder',
      children: [],
    },
    {
      name: 'Users',
      type: 'folder',
      children: [
        {
          name: 'mathisolaya',
          type: 'folder',
          children: [
            {
              name: 'Documents',
              type: 'folder',
              children: [
                {
                  name: 'Zwap',
                  type: 'folder',
                  children: [],
                },
                {
                  name: 'ClipIt',
                  type: 'folder',
                  children: [],
                },
                {
                  name: 'Test.txt',
                  type: 'file',
                  content: 'Fichier Texte',
                },
              ],
            },
          ],
        },
        {
          name: 'Public',
          type: 'folder',
          children: [],
        },
      ],
    },
  ],
};
