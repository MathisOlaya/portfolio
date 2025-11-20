// Components
import FloatingLines from '../components/FloatingLines';
import Executable from '../components/Executable';
import Window from '../components/Window';

// Context
import { useAppManager } from '../managers/AppManager';

// Apps
import Explorer from '../components/Apps/Explorer/Explorer';
import { useMemo } from 'react';

function Desktop() {
  const base = import.meta.env.BASE_URL || '/';
  const FloatingLinesMemo = useMemo(() => <FloatingLines interactive={false} />, []);
  const { openApps, closeApp } = useAppManager();

  return (
    <>
      <div className="h-screen relative">
        {FloatingLinesMemo}
        <main className="absolute w-full h-full items-start flex gap-1 top-0 left-0 py-2">
          <Executable icon={base + 'my-pc.png'} name="Ce PC">
            <p>Mon PC</p>
          </Executable>
          <Executable icon={base + 'folder.png'} name="Mes projets">
            <Explorer path="C:/Users/mathisolaya/Documents" />
          </Executable>
        </main>

        {/* All opened apps */}
        {openApps.map((app) => {
          return (
            <Window key={app.id} name={app.name} icon={app.icon} onCloseButtonClick={() => closeApp(app.id)}>
              {app.content}
            </Window>
          );
        })}
      </div>
    </>
  );
}

export default Desktop;
