import Link from "next/link";

interface ImageWithDescriptionProps {
  children: React.ReactNode;
  titleSize?: string;
  gap?: string;
  items: number;
  title: string;
  span?: string;
}

const ImageWithDescription: React.FunctionComponent<
  ImageWithDescriptionProps
> = ({
  title = "Furniture",
  titleSize = "text-4xl",
  gap = "gap-2",
  span,
  items,
  children,
}: ImageWithDescriptionProps) => {
  return (
    <div className={`relative ${span}`}>
      <div className={`absolute top-5 left-5 flex flex-col ${gap}`}>
        <span className="text-secondary-light font-semibold">
          {items} Items
        </span>
        <h2 className={`text-gray-800 uppercase font-bold ${titleSize}`}>
          {title}
        </h2>
        <Link
          href="/"
          className="text-gray-800 font-bold hover:underline underline-offset-4 decoration-2"
        >
          Read more
        </Link>
      </div>
      {children}
    </div>
  );
};

export default ImageWithDescription;
