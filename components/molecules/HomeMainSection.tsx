/* eslint-disable @next/next/no-img-element */
import { ImageWithDescription } from "@/atoms";

const HomeMainSection: React.FunctionComponent = () => {
  return (
    <section className="w-full py-16 margin-min-screen">
      <div className="flex w-full gap-4">
        <ImageWithDescription title="Furniture" items={5}>
          <img src="/furniture-main.jpg" alt={"furniture-main"} />
        </ImageWithDescription>
        <div className="grid grid-cols-2 gap-4">
          <ImageWithDescription
            span="col-span-2"
            title="Furniture"
            titleSize="text-2xl"
            items={5}
            gap="gap-0.5"
          >
            <img
              className="w-full h-full"
              src="/furniture-two.png"
              alt={"furniture-two"}
            />
          </ImageWithDescription>
          <ImageWithDescription
            title="Furniture"
            items={5}
            titleSize="text-2xl"
            gap="gap-0.5"
          >
            <img
              className="w-full h-full"
              src="/furniture-three.png"
              alt={"furniture-three"}
            />
          </ImageWithDescription>
          <ImageWithDescription
            title="Furniture"
            items={5}
            titleSize="text-2xl"
            gap="gap-0.5"
          >
            <img
              className="w-full h-full"
              src="/furniture-four.png"
              alt={"furniture-four"}
            />
          </ImageWithDescription>
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
