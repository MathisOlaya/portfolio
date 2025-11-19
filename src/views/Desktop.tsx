// Components
import FloatingLines from "../components/FloatingLines";
import Executable from "../components/Executable";

function Desktop() {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <>
      <div className="h-screen relative">
        <FloatingLines interactive={false} />
        <main className="absolute w-full h-full items-start flex gap-1 top-0 left-0 py-2">
          <Executable icon={base + 'my-pc.png'} name="Ce PC" />
          <Executable icon={base + 'folder.png'} name="Mon dossier" />
        </main>
      </div>
    </>
  );
}

export default Desktop;
