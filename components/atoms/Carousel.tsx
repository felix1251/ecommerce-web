/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface ICarousel {
  images: string[];
}

const Carousel: React.FunctionComponent<ICarousel> = ({
  images,
}: ICarousel) => {
  const [displayImage, setDisplayImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col gap-6 w-[35rem]">
      <img
        className="h-[27rem] w-full border rouded-sm object-cover object-top"
        src={displayImage}
        alt="displayImage"
      />
      <div className="flex gap-4 w-full overflow-x-auto">
        {images.map((url) => (
          <button key={url} onClick={() => setDisplayImage(url)}>
            <img
              src={url}
              className={`rounded-sm max-w-28 min-w-28 border-2 max-h-24 min-h-24 overflow-hidden object-cover object-top ${
                displayImage === url ? "border-primary" : ""
              }`}
              alt={url}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
