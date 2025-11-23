import { createContext, useContext, useState, isValidElement, type ReactNode } from 'react';

export interface AppInstance {
  id: string;
  name: string;
  icon: string;
  position: { top: number; left: number };
  content: ReactNode;
  minimized: boolean;
}

interface AppManagerContextType {
  openApps: AppInstance[];
  openApp: (name: string, icon: string, content: ReactNode) => void;
  closeApp: (id: string) => void;
  moveApp: (id: string, newPos: { top: number; left: number }) => void;
  toggleMinimization: (id: string) => void;
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
        position: { top: 50, left: 50 },
        minimized: false,
      },
    ]);
  };

  const moveApp = (id: string, newPos: { top: number; left: number }) => {
    setOpenApps((prev) => prev.map((app) => (app.id === id ? { ...app, position: newPos } : app)));
  };

  const closeApp = (id: string) => {
    setOpenApps((prev) => prev.filter((app) => app.id !== id));
  };

  const toggleMinimization = (id: string) => {
    setOpenApps((prev) => prev.map((app) => (app.id === id ? { ...app, minimized: !app.minimized } : app)));
  };

  return <AppManagerContext.Provider value={{ openApps, openApp, closeApp, moveApp, toggleMinimization }}>{children}</AppManagerContext.Provider>;
};

export const useAppManager = () => {
  const context = useContext(AppManagerContext);
  if (!context) throw new Error('Error with manager context');
  return context;
};
