const FeaturedPostSection: React.FunctionComponent = () => {
  return (
    <section className="py-16 margin-small-screen flex flex-col w-full">
      <div className="flex flex-col justify-center items-center font-bold gap-4">
        <span className="text-primary text-sm font-bold">Practice Advice</span>
        <h2 className="text-3xl font-extrabold text-gray-800">
          Featured Posts
        </h2>
      </div>
    </section>
  );
};

export default FeaturedPostSection;
