// Props
interface Props {
  path: string;
}

function Photos({ path }: Props) {
  return (
    <div className="flex justify-center">
      <img className="max-h-[400px]" src={path} alt="Image" />
    </div>
  );
}

export default Photos;
