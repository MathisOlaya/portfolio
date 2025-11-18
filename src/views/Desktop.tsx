// Components
import FloatingLines from "../components/FloatingLines";
import Executable from "../components/Executable";

function Desktop() {
  return (
    <>
      <div className="h-screen relative">
        <FloatingLines interactive={false} />
        <main className="absolute flex gap-1 top-0 left-0 py-2">
          <Executable icon="/my-pc.png" name="Ce PC" />
          <Executable icon="/folder.png" name="Mon dossier" />
        </main>
      </div>
    </>
  );
}

export default Desktop;
