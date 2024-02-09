import { PostCard } from "@/atoms";

const FeaturedPostSection: React.FunctionComponent = () => {
  return (
    <section className="py-16 mx-auto max-w-[1100px] px-4 md:px-8 w-full flex flex-col gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-primary text-sm font-bold">Practice Advice</span>
        <h2 className="text-3xl font-extrabold text-gray-800">
          Featured Posts
        </h2>
      </div>
      <div className="grid place-content-center md:grid-cols-3 gap-7 md:gap-3.5">
        <PostCard
          isNew={true}
          imgUrl="/post-one.png"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
        <PostCard
          isNew={true}
          imgUrl="/post-two.png"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
        <PostCard
          isNew={true}
          imgUrl="/post-three.png"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
      </div>
    </section>
  );
};

export default FeaturedPostSection;
