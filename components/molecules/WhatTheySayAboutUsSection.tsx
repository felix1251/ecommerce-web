import { MediaPhotos, Testimony } from "@/molecules";

const WhatTheySayAboutUsSection: React.FunctionComponent = () => {
  return (
    <section className="py-32 mx-auto max-w-[1000px] px-8 w-full grid lg:grid-cols-2 gap-24">
      <Testimony />
      <MediaPhotos />
    </section>
  );
};

export default WhatTheySayAboutUsSection;
