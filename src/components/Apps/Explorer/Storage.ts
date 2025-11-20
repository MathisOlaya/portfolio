export type File = {
  type: "file";
  content: string;
};

export type Folder = {
  type: "folder";
  children: Record<string, File | Folder>;
};

export const Storage: Folder = {
  type: "folder",
  children: {
    "C:": {
      type: "folder",
      children: {
        Users: {
          type: "folder",
          children: {
            mathisolaya: {
              type: "folder",
              children: {
                Documents: {
                  type: "folder",
                  children: {
                    Zwap: {
                      type: "file",
                      content: "Zwap est un projet...",
                    },
                  },
                },
              },
            },
            public: {
              type: "folder",
              children: {},
            },
          },
        },
        Program: {
          type: "folder",
          children: {},
        },
      },
    },
  },
};
