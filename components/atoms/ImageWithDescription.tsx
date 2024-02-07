import * as React from "react";

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
}) => {
  return (
    <div className={`relative ${span}`}>
      <div className={`absolute top-5 left-5 flex flex-col ${gap}`}>
        <span className="text-[#2DC071] font-semibold">{items} Items</span>
        <h2 className={`text-gray-800 uppercase font-bold ${titleSize}`}>
          {title}
        </h2>
        <span className="text-gray-800 font-bold">Read more</span>
      </div>
      {children}
    </div>
  );
};

export default ImageWithDescription;
