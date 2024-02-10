/* eslint-disable @next/next/no-img-element */
"use client";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

interface ICarousel {
  images: string[];
}

const Carousel: React.FunctionComponent<ICarousel> = ({
  images,
}: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const canNext: boolean = currentIndex + 1 < images.length;
  const canPrev: boolean = currentIndex != 0;

  const next = (): void => {
    if (!canNext) return;
    setCurrentIndex((state) => state + 1);
  };

  const prev = (): void => {
    if (!canPrev) return;
    setCurrentIndex((state) => state - 1);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full lg:min-w-[34rem]">
      <div className="relative h-[20rem] sm:h-[24rem] md:h-[28rem]">
        {canNext && (
          <button
            aria-label="next image"
            onClick={next}
            className="right-7 top-[45%] absolute"
          >
            <ArrowForwardIosIcon
              className="text-gray-200 hover:text-primary transition-colors duration-200 ease-in-out"
              style={{ fontSize: 50 }}
            />
          </button>
        )}
        {canPrev && (
          <button
            aria-label="prev image"
            onClick={prev}
            className="left-7 top-[45%] absolute"
          >
            <ArrowBackIosIcon
              className="text-gray-200 hover:text-primary transition-colors duration-200 ease-in-out"
              style={{ fontSize: 50 }}
            />
          </button>
        )}
        <img
          className="h-full w-full border rouded-sm object-cover object-top"
          src={images[currentIndex]}
          alt="displayImage"
        />
      </div>
      <div className="flex gap-2 md:gap-4 w-full overflow-x-auto">
        {images.map((url, index) => (
          <button
            aria-label="select image"
            key={url}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={url}
              className={`rounded-sm max-w-20 md:max-w-24 min-w-24 md:min-w-28 border-2 max-h-24 min-h-24 overflow-hidden object-cover object-top ${
                images[currentIndex] === url ? "border-primary" : ""
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
