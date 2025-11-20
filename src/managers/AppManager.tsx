import { createContext, useContext, useState, type ReactNode } from 'react';

export interface AppInstance {
  id: string;
  name: string;
  icon: string;
  content: ReactNode;
  minimized: boolean;
}

interface AppManagerContextType {
  openApps: AppInstance[];
  openApp: (name: string, icon: string, content: ReactNode) => void;
  closeApp: (id: string) => void;
}

const AppManagerContext = createContext<AppManagerContextType | undefined>(undefined);

export const AppManagerProvider = ({ children }: { children: ReactNode }) => {
  const [openApps, setOpenApps] = useState<AppInstance[]>([]);

  const openApp = (name: string, icon: string, content: ReactNode) => {
    setOpenApps((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        icon,
        content,
        minimized: false,
      },
    ]);
  };

  const closeApp = (id: string) => {
    setOpenApps((prev) => prev.filter((app) => app.id !== id));
  };

  return <AppManagerContext.Provider value={{ openApps, openApp, closeApp }}>{children}</AppManagerContext.Provider>;
};

export const useAppManager = () => {
  const context = useContext(AppManagerContext);
  if (!context) throw new Error('Error with manager context');
  return context;
};
