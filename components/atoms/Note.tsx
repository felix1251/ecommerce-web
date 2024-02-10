/* eslint-disable @next/next/no-img-element */
interface INoteProps {
  imgUrl: string;
  label: string;
  description: string;
}

const Note: React.FunctionComponent<INoteProps> = ({
  imgUrl,
  label,
  description,
}: INoteProps) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full md:max-w-md">
      <img src={imgUrl} className="w-20" alt="book-reader" />
      <span className="text-xl font-extrabold text-gray-800">{label}</span>
      <p className="text-sm text-zinc-400 font-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default Note;
