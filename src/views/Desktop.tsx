// Components
import FloatingLines from '../components/FloatingLines';
import Executable from '../components/Executable';
import Window from '../components/Window';
import TaskBar from '../components/TaskBar';

// Context
import { useAppManager } from '../managers/AppManager';


// Apps
import Explorer from '../components/Apps/Explorer/Explorer';
import { useMemo } from 'react';

function Desktop() {
  const base = import.meta.env.BASE_URL || '/';
  const FloatingLinesMemo = useMemo(() => <FloatingLines interactive={false} />, []);
  const { openApps } = useAppManager();

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
          <TaskBar/>
        </main>

        {/* All opened apps */}
        {openApps.map((app) => !app.minimized
          ? (
            <Window key={app.id} id={app.id} name={app.name} icon={app.icon} position={app.position}>
              {app.content}
            </Window>
          ) : null
        )}
      </div>
    </>
  );
}

export default Desktop;
