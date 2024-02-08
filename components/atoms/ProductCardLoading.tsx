import React from "react";

const ProductCard: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-5 max-w-md">
      <div className="w-full h-52 rounded-sm border bg-zinc-200 animate-pulse" />
      <div className="flex flex-col text-center gap-2">
        <div className="w-full bg-zinc-200 h-4 animate-pulse"></div>
        <div className="w-full bg-zinc-200 h-4 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCard;
