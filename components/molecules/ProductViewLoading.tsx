const ProductViewLoading: React.FunctionComponent = () => {
  return (
    <div className="flex gap-10 md:gap-16">
      <div className="bg-gray-100 w-full lg:min-w-[34rem] h-[20rem] sm:h-[24rem] md:h-[28rem] rounded-sm animate-pulse mb-32"></div>
      <div className="w-full hidden md:block"></div>
    </div>
  );
};

export default ProductViewLoading;
