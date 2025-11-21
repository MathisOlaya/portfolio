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
                  name: 'README.md',
                  type: 'file',
                  content: "# Bienvenu(e) \n Vous Retrouverez dans ce dossier tout mes projets publique également disponibles sur GitHub. \n ## Qui suis-je ? \n Je m'appelle Mathis Olaya et je suis étudiant en 3ème année de développement en **Informatique** à l'école des métiers à *Lausanne*. Autant sur le plan scolaire que personnel, j'ai eu l'occasion d'acquérir des compétences dans plusieurs domaines. Notemment ceux ci : \n - Web Development \n - Software Development",
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
